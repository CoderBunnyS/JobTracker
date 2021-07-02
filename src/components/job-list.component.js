import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import JobTableRow from './JobTableRow';
import { withAuth0 } from '@auth0/auth0-react';
//import { Switch, Route, Link } from "react-router-dom"
import createJobComponent from "./create-job.component";
import CreateModal from "./createModal";
import Button from "react-bootstrap/Button"
import EditModal from "./editModal"

//const mongoURI = "mongodb+srv://TrackerAdmin:TrackerAdminPassword@TrackerDatabase.euzmb.mongodb.net/TrackerDatabase?retryWrites=true&w=majority"
const serverRoute = "http://localhost:4000/jobs/jobs"


class JobList extends Component {
    constructor(props) {
        super(props)
        this.openCreateModal = this.openCreateModal.bind(this);
        this.closeCreateModal = this.closeCreateModal.bind(this);
        this.AddNewJobToList = this.AddNewJobToList.bind(this);
        this.openEditModal = this.openEditModal.bind(this);
        this.closeEditModal = this.closeEditModal.bind(this);
        this.EditOneJobFromList = this.EditOneJobFromList.bind(this);

        this.state = {
            jobs: [],
            showCreateModal: false,
            showEditModal: false,
            activeJob: {},
            activeJobIndex: -1
        };
    }

    deleteItem(index){
      const newJobs = [...this.state.jobs];
      newJobs.splice(index, 1)
      this.setState({
        jobs: newJobs
      })
    }
    openCreateModal(){
      console.log("this is working")
      console.log(this.state.showCreateModal)
      this.setState({
        showCreateModal: true
      })
    }
    openEditModal(i){
      console.log(this.state.jobs[i])
      const myJob = this.state.jobs[i]
      this.setState({
        showEditModal: true,
        activeJob: myJob,
        activeJobIndex: i
      })
    }
    closeCreateModal(){  
      console.log(this.state.showCreateModal)
      this.setState({
        showCreateModal: false
      })
    }
    closeEditModal(){
      this.setState({
        showEditModal: false
      })
    }

    AddNewJobToList(jobObject) {
      const updatedJobsArray = [...this.state.jobs];
      updatedJobsArray.push(jobObject)
      this.setState({
        jobs: updatedJobsArray
      })
    }
    EditOneJobFromList(jobObject) {
      const updatedJobsArray = [...this.state.jobs];
      updatedJobsArray[this.state.activeJobIndex] = jobObject
      this.setState({
        jobs: updatedJobsArray
      })
    }

    componentDidMount() {
        const { isAuthenticated, user } = this.props.auth0;
        console.log(user)
        if (isAuthenticated) {
          const route = process.env.REACT_APP_BACKEND_URL + `jobs/jobs/byuser/${user.name}`

          axios.get(route)

          .then(res => {
            console.log(res.data)
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
            return <JobTableRow obj={res} key={i} JL={this} 
            edit = {() => this.openEditModal(i)} remove={() => this.deleteItem(i)} />;
        })
    }
    render() {
        console.log(this.state.showCreateModal)
        return (<div className="table-wrapper">
          {/* <Link to="/create-job">Create Job</Link> */}
          <Button onClick = {this.openCreateModal}>Create Job</Button>
          {
            this.state.showCreateModal && 
            <CreateModal 
              handleNew = {this.AddNewJobToList}
              handleHide={this.closeCreateModal}    
          />}
          {this.state.showEditModal && <EditModal 
          Data = {this.state.activeJob} 
          handleHide={this.closeEditModal}
          handleUpdate = {this.EditOneJobFromList}  
          />}
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
