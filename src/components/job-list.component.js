import React, { Component } from "react";
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import JobTableRow from './JobTableRow';

const mongoURI = "mongodb://TrackerAdmin:TrackerAdminPassword@cluster0-shard-00-00.euzmb.mongodb.net:27017,cluster0-shard-00-01.euzmb.mongodb.net:27017,cluster0-shard-00-02.euzmb.mongodb.net:27017/TrackerDatabase?ssl=true&replicaSet=atlas-va16fv-shard-0&authSource=admin&retryWrites=true&w=majority"
//"http://localhost:4000/jobs/"

export default class JobList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            jobs: []
        };
    }

    componentDidMount() {
        axios.get(mongoURI)
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