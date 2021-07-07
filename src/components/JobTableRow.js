import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { Draggable } from 'react-beautiful-dnd';
import CompanyLogo from './CompanyLogo.js'
import Icon from './icon.component.js'

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
            <Draggable draggableId={this.props.obj._id} index={this.props.index} isDragDisabled={!this.props.fullDetail}>
            {provided => (
              <div className={"job-card " + `${this.props.obj.phase.toLowerCase()}`}
              {...provided.draggableProps}
              {...provided.dragHandleProps}
              ref={provided.innerRef}
              >
              {/* <Link>Create Job</Link> */}
              {this.props.fullDetail && <div onClick={this.props.edit} className="expand"><Icon iconName="expand" /></div>}

                {<div className={"status-dot " + `${this.props.obj.phase}`}></div>}
                <CompanyLogo companyName={this.props.obj.company.toLowerCase()}/>
                <div>
                  <p className="company">{this.props.obj.company}</p>
                  <p className="position">{this.props.obj.title}</p>

                </div>
                  <div>
                      {/* <Button className="edit-link" onClick={this.props.edit}>
                          Edit
                      </Button> */}
                      {/* <Button size="sm" variant="danger" onClick={this.deleteJob}>Delete</Button> */}
                  </div>
              </div>
            )}
            </Draggable>

        );
    }
}
