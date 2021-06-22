import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import DeleteButton from './delete-job.component';

var mongoURI = 'http://localhost:4000/jobs/'

export default class JobTableRow extends Component {
    constructor(props){
    super(props);
    this.deleteJob = this.deleteJob.bind(this);
    }

    deleteJob() {
        
        axios.delete(`${mongoURI}/jobs/delete-job/${this.props.obj._id}`)
        .then((res) => {
            console.log('Job successfully deleted!')
        }).catch((error) => {
            console.log(error)
        })
    }
    
    render() {
        return (
            <tr>
                <td>{this.props.obj.title}</td>
                <td>{this.props.obj.company}</td>
                <td>{this.props.obj.appliedDate}</td>
                <td>
                    <Link className="edit-link" to={"/edit-job/" + this.props.obj._id}>
                        Edit
                    </Link>
                    <Button onClick={DeleteButton()} className = "delete-btn" size="sm" variant="danger">Delete</Button>
                </td>
            </tr>
        );
    }
}