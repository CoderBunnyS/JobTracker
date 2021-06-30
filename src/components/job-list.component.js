import React, { Component } from "react";
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import JobTableRow from './JobTableRow';
require('dotenv').config()

//const mongoURI = "mongodb+srv://TrackerAdmin:TrackerAdminPassword@TrackerDatabase.euzmb.mongodb.net/TrackerDatabase?retryWrites=true&w=majority"
const serverRoute = "http://localhost:4000/jobs/jobs"

export default class JobList extends Component {
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
        axios.get(serverRoute)

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

    DataTable(){
        return this.state.jobs.map((res, i) => {
            return <JobTableRow obj={res} key={i} JL={this} remove={() => this.deleteItem(i)} />;
        })
    }
    render() {
        return (<div className="table-wrapper">
          <h1>Jobs</h1>
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
