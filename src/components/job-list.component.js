import React, { Component } from "react";
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import JobTableRow from './JobTableRow';
import { withAuth0 } from '@auth0/auth0-react';
import { Switch, Route, Link } from "react-router-dom"
import createJobComponent from "./create-job.component";

//const mongoURI = "mongodb+srv://TrackerAdmin:TrackerAdminPassword@TrackerDatabase.euzmb.mongodb.net/TrackerDatabase?retryWrites=true&w=majority"
const serverRoute = "http://localhost:4000/jobs/jobs"

const Modal = ({ location }) => {
  const { state = {} } = location;
  const { modal } = state;

  return(
    <div className={modal ? "modal" : undefined }>
    {modal && <Link to="/job-list">Close</Link>}
    <createJobComponent />
    </div>
  )
}

class JobList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            jobs: []
        };
    }

    deleteItem(index){
      const newJobs = [...this.state.jobs];
      newJobs.splice(index, 1)
      this.setState({
        jobs: newJobs
      })
    }

    componentDidMount() {
        const { isAuthenticated, user } = this.props.auth0;
        console.log(user)
        if (isAuthenticated) {
          const route = process.env.REACT_APP_BACKEND_URL + `jobs/jobs/byuser/${user.name}`

          axios.get(route)

          .then(res => {
            console.log(res)
              this.setState({
                jobs: res.data,
              })
          })
          
          .catch((error) => {
              //console.log(error.response.data)
              console.log(error + " axios error");
          })

        }
    }

    DataTable(){
        return this.state.jobs.map((res, i) => {
            return <JobTableRow obj={res} key={i} JL={this} remove={() => this.deleteItem(i)} />;
        })
    }
    render() {
        return (<div className="table-wrapper">
          <h1>Jobs</h1>
          <div className = "links">
            <Link to="/job-list" className = "link">Your Jobs</Link>
            <Link to={{
              pathname: "/create-job",
              state: { modal: true }
              }} className="link">Create Job</Link>
          </div>
          <div>
            <Switch>
              <Route path = "/job-list" component={JobList} />
              <Route path = "/create-job" component = {Modal} />
            </Switch>
          </div>
          <h2>Keep track of the jobs you are applying to</h2>

          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Title</th>
                <th>Company Name</th>
                <th>Date Applied</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {this.DataTable()}
            </tbody>
          </Table>
        </div>);
      }
    }

export default withAuth0(JobList)
