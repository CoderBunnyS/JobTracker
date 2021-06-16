import React, {Component} from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';

var mongoURI = 'mongodb+srv://TrackerAdmin:TrackerAdminPassword@cluster0.euzmb.mongodb.net/TrackerDatabase?retryWrites=true&w=majority';

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
