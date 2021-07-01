import React, {Component} from "react";
import { Route, Link } from "react-router-dom";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';
require('dotenv').config()

//var mongoURI = "mongodb://TrackerAdmin:TrackerAdminPassword@cluster0-shard-00-00.euzmb.mongodb.net:27017,cluster0-shard-00-01.euzmb.mongodb.net:27017,cluster0-shard-00-02.euzmb.mongodb.net:27017/TrackerDatabase?ssl=true&replicaSet=atlas-va16fv-shard-0&authSource=admin&retryWrites=true&w=majority"
var mongoURI = 'http://localhost:4000/jobs/job/create'
//var mongoURI = process.env.MONGODB_URI;

export default class CreateJob extends Component {

    constructor(props){
        super(props)
            
    //setting functions
    this.onChangeJobTitle = this.onChangeJobTitle.bind(this);
    this.onChangeCompany = this.onChangeCompany.bind(this);
    this.onChangeAppliedDate = this.onChangeAppliedDate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    //Setting state
    this.state = {
        title:'',
        company:'',
        appliedDate:''
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

    const jobObject = {
        title: this.state.title,
        company: this.state.company,
        appliedDate: this.state.appliedDate
    };
    console.log(jobObject)
    axios.post(mongoURI, jobObject)
    .then(res => console.log(res.data));

    this.setState({title:'', company:'', appliedDate:''})
}

  render() {
    return (<div className="form-wrapper">
      <Form onSubmit={this.onSubmit}>
        <Form.Group controlId="Title">
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" value={this.state.title} onChange={this.onChangeJobTitle}/>
        </Form.Group>

        <Form.Group controlId="Company">
          <Form.Label>Company Name</Form.Label>
          <Form.Control type="text" value={this.state.company} onChange={this.onChangeCompany}/>
        </Form.Group>

        <Form.Group controlId="Applied">
          <Form.Label>Date Applied</Form.Label>
          <Form.Control type="date" value={this.state.appliedDate} onChange={this.onChangeAppliedDate}/>
        </Form.Group>

        <Button variant="danger" size="lg" block="block" type="submit">
          Create Job
        </Button>
      </Form>
    </div>);
  }
}
