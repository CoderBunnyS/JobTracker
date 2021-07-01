import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
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
            return <JobTableRow obj = {res} key={i} JL={this} />;
        })
    }
    render() {
        return (<div className="table-wrapper">
          <Link to="/create-job">Create Job</Link>
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