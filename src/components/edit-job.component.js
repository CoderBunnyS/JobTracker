import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';

var mongoURI = "mongodb+srv://TrackerAdmin:TrackerAdminPassword@TrackerDatabase.euzmb.mongodb.net/TrackerDatabase?retryWrites"
//'http://localhost:4000/jobs/update-job'
export default class EditJob extends Component {

  constructor(props) {
    super(props)

    this.onChangeJobTitle = this.onChangeJobTitle.bind(this);
    this.onChangeCompany = this.onChangeCompany.bind(this);
    this.onChangeAppliedDate = this.onChangeAppliedDate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // State
    this.state = {
      title: '',
      company: '',
      appliedDate: ''
    }
  }

  // componentDidMount() {
  //   console.log(`${this._id}`)
    
  // }

  onChangeJobTitle(e) {
    this.setState({ title: e.target.value })
  }

  onChangeCompany(e) {
    this.setState({ company: e.target.value })
  }

  onChangeAppliedDate(e) {
    this.setState({ appliedDate: e.target.value })
  }

  onSubmit(e) {
    e.preventDefault()
    

    const jobObject = {
      title: this.state.title,
      company: this.state.company,
      appliedDate: this.state.appliedDate,
    };

    axios.put(`${mongoURI}/${this.props.match.params.id}`, jobObject)
      .then((res) => {
        console.log(res.data)
        console.log('Job successfully updated')
        window.location.reload(false);
        // this.componentDidMount()
      }).catch((error) => {
        console.log(error)
      })

    // Redirect to Job List 
    this.props.history.push('/job-list')
  }


  render() {
    return (<div className="form-wrapper">
      <Form onSubmit={this.onSubmit}>
        <Form.Group controlId="Title">
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" value={this.state.title} onChange={this.onChangeJobTitle} />
        </Form.Group>

        <Form.Group controlId="Company">
          <Form.Label>Company</Form.Label>
          <Form.Control type="text" value={this.state.company} onChange={this.onChangeCompany} />
        </Form.Group>

        <Form.Group controlId="appliedDate">
          <Form.Label>Date Applied</Form.Label>
          <Form.Control type="date" value={this.state.appliedDate} onChange={this.onChangeAppliedDate} />
        </Form.Group>

        <Button variant="danger" size="lg" block="block" type="submit">
          Update Job
        </Button>
      </Form>
    </div>);
  }
}