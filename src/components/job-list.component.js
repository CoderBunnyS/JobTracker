import React, { Component } from "react";
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import JobTableRow from './JobTableRow';

const mongoURI = 'mongodb+srv://TrackerAdmin:TrackerAdminPassword@cluster0.euzmb.mongodb.net/TrackerDatabase?retryWrites=true&w=majority'

export default class JobList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            jobs: []
        };
    }

    componentDidMount() {
        axios.get(`${mongoURI}/job-list`)
        .then(res => {
            this.setState({
                jobs: res.data
            })
        })
        .catch((error) => {
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