import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { Draggable } from 'react-beautiful-dnd';

const badRandom = () => Math.floor(Math.random() * 50000 % (Math.floor(Math.random() * 40000)));

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
            <Draggable draggableId={this.props.obj._id} index={this.props.index}>
            {provided => (
              <Container className="job-card"
              {...provided.draggableProps}
              {...provided.dragHandleProps}
              ref={provided.innerRef}
              >
              {/* <Link>Create Job</Link> */}
                  <p>{this.props.obj.title}</p>
                  <p>{this.props.obj.company}</p>
                  {/* <p>{this.props.obj.appliedDate}</p> */}
                  <div>
                      <Button className="edit-link" onClick={this.props.edit}>
                          Edit
                      </Button>
                      <Button size="sm" variant="danger" onClick={this.deleteJob}>Delete</Button>
                  </div>
              </Container>
            )}
            </Draggable>

        );
    }
}
