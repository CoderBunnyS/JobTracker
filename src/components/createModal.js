import React, {Component} from "react";
import { Route, Link } from "react-router-dom";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { withAuth0 } from '@auth0/auth0-react';
import Modal from "react-bootstrap/Modal"


//var mongoURI = "mongodb://TrackerAdmin:TrackerAdminPassword@cluster0-shard-00-00.euzmb.mongodb.net:27017,cluster0-shard-00-01.euzmb.mongodb.net:27017,cluster0-shard-00-02.euzmb.mongodb.net:27017/TrackerDatabase?ssl=true&replicaSet=atlas-va16fv-shard-0&authSource=admin&retryWrites=true&w=majority"
var mongoURI = 'http://localhost:4000/jobs/job/create'
//var mongoURI = process.env.MONGODB_URI;

class CreateModal extends Component {

    constructor(props){
        super(props)
        console.log(this.props.phase)

    //setting functions
    this.onChangeJobTitle = this.onChangeJobTitle.bind(this);
    this.onChangeCompany = this.onChangeCompany.bind(this);
    this.onChangeAppliedDate = this.onChangeAppliedDate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    //Setting state
    this.state = {
        title:'',
        company:'',
        appliedDate:'',
        phase: '',
    }
}

onChangeJobTitle(e) {
    this.setState({title: e.target.value})
}
onChangeCompany(e) {
    this.setState({company: e.target.value})
}
onChangeAppliedDate(e){
    this.setState({appliedDate: e.target.value})
}
onSubmit(e) {
    e.preventDefault()

    const {isAuthenticated, user} = this.props.auth0;
    if (isAuthenticated) {
      const jobObject = {
          title: this.state.title,
          company: this.state.company,
          appliedDate: this.state.appliedDate,
          username: user.name,
          phase: this.props.phase,
      };
      console.log(jobObject)
      axios.post(mongoURI, jobObject)
      .then(res => {
        this.setState({title:'', company:'', appliedDate:''})
        this.props.handleNew(res.data.job)
        this.props.handleHide()
        console.log(res.data)
      });




    }

}

  render() {
    return (
    <Modal show={true} onHide={this.props.handleHide} size="lg">
    <div className="form-wrapper">
      <Form onSubmit={this.onSubmit}>


        <Form.Group controlId="Company">
          {/* <Form.Label>Company Name</Form.Label> */}
          <Form.Control placeholder="Company"type="text" value={this.state.company} onChange={this.onChangeCompany}/>
        </Form.Group>
        <Form.Group controlId="Title">
          {/* <Form.Label>Title</Form.Label> */}
          <Form.Control placeholder= "Job Title" type="text" value={this.state.title} onChange={this.onChangeJobTitle}/>
        </Form.Group>
        <Form.Group controlId="Applied">
          {/* <Form.Label>Date Applied</Form.Label> */}
          <Form.Control placeholder= "Application Date" type="date" value={this.state.appliedDate} onChange={this.onChangeAppliedDate}/>
        </Form.Group>

        <Button variant="primary" size="lg" block="block" type="submit" id="createSubmit" className="round">
          Create Job
        </Button>
      </Form>
      </div>
      </Modal>
    );
  }
}

export default withAuth0(CreateModal);
