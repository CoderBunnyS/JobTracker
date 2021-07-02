import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import axios from 'axios';
import Button from 'react-bootstrap/Button';


//var mongoURI = "mongodb+srv://TrackerAdmin:TrackerAdminPassword@TrackerDatabase.euzmb.mongodb.net/TrackerDatabase?retryWrites"



export default class JobTableRow extends Component {
    constructor(props) {
      super(props);
      this.deleteJob = this.deleteJob.bind(this);
    }

    deleteJob() {
        const url = process.env.REACT_APP_BACKEND_URL + `jobs/job/${this.props.obj._id}/delete`
        console.log(url);

        axios.post(url)
        .then((res) => {
            console.log(res);
            console.log('Job successfully deleted!')
            this.props.remove();
        }).catch((error) => {
            console.log(error)
        })
    }

    render() {
        return (
            <div>
            <Link>Create Job</Link>
            <tr>
                <td>{this.props.obj.title}</td>
                <td>{this.props.obj.company}</td>
                <td>{this.props.obj.appliedDate}</td>
                <td>

                    <Link className="edit-link" to={"/edit-job/" + this.props.obj._id}>
                        Edit
                    </Link>
                    <Button size="sm" variant="danger" onClick={this.deleteJob}>Delete</Button>
                </td>
            </tr>
            </div>
        );
    }
}
