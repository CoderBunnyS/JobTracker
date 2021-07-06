import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import Modal from "react-bootstrap/Modal"
import JobHeader from './JobHeader.js'
import Icon from './icon.component.js'
require('dotenv').config()


// function getID() {
//   const url = window.location.href
//   const pieces = url.split('/')
//   return pieces[pieces.length-1]
// }


//var mongoURI = "mongodb+srv://TrackerAdmin:TrackerAdminPassword@TrackerDatabase.euzmb.mongodb.net/TrackerDatabase?retryWrites"
var mongoURI = 'http://localhost:4000/jobs/job'

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

  componentDidMount() {
    // axios.get(`${mongoURI}/${getID()}`)
    //   .then((res) => {
        console.log(this.props)
        this.setState({
          title: this.props.Data.title,
          company: this.props.Data.company,
          appliedDate: this.props.Data.appliedDate
        })
    //     //window.location.reload(false);
    //     // this.componentDidMount()
    //   }).catch((error) => {
    //     console.log(error)
    //   })

  }

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
      phase: this.props.phase,
    };

    axios.post(`${mongoURI}/${this.props.Data._id}/update`, jobObject)
      .then((res) => {
        console.log('RES:', res)
        console.log('Job successfully updated')

        this.setState({title:'', company:'', appliedDate:''})
        this.props.handleUpdate(res.data.job)
        this.props.handleHide()
      }).catch((error) => {
        console.log(error)
      })

    // Redirect to Job List
    // this.props.history.push('/job-list')

  }


  render() {
    console.log(this.props.phase)
    return (
    <Modal show={true} onHide={this.props.handleHide} size="lg">
    <div className="form-wrapper">
      <Form onSubmit={this.onSubmit}>
      <div className="close-modal" onClick={this.props.handleHide}><Icon iconName="ex" size="sm"/></div>

        <JobHeader company={this.state.company} title={this.state.title}/>
        <Form.Group controlId="Company">
          <Form.Label>Company</Form.Label>
          <Form.Control type="text" value={this.state.company} onChange={this.onChangeCompany} />
        </Form.Group>

        <Form.Group controlId="Title">
          <Form.Label>Job Title</Form.Label>
          <Form.Control type="text" value={this.state.title} onChange={this.onChangeJobTitle} />
        </Form.Group>


        <Form.Group controlId="appliedDate">
          <Form.Label>Date Applied</Form.Label>
          <Form.Control type="date" value={this.state.appliedDate} onChange={this.onChangeAppliedDate} />
        </Form.Group>

        <Button variant="primary" size="med" block="block" type="submit" className="">
          Update
        </Button>
        <Button variant="outline-danger" size="med" block="block" type="" className="">
          Delete
        </Button>
      </Form>
    </div>
    </Modal>);
  }
}
