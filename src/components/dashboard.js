import React, { Component } from "react";
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import JobTableRow from './JobTableRow';
import { withAuth0 } from "@auth0/auth0-react";
import CreateModal from "./createModal";
import Row from 'react-bootstrap/Row';
import BoardColumn from './BoardColumn.js';
import {DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import Inspiration from './inspiration'
import Goals from './Goals'





// const { user, isAuthenticated, isLoading } = useAuth0();
const months = ["January","February","March","April","May","June","July",
            "August","September","October","November","December"];
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

//const mongoURI = "mongodb+srv://TrackerAdmin:TrackerAdminPassword@TrackerDatabase.euzmb.mongodb.net/TrackerDatabase?retryWrites=true&w=majority"
const serverRoute = "http://localhost:4000/jobs/jobs"

class Dashboard extends Component {

    constructor(props) {
        super(props)
        this.state = {
            jobs: [],
            date: 'month day'
        };
    }

    componentDidMount() {
      const { isAuthenticated, user } = this.props.auth0;

      const date = new Date();
      const dateString = `${days[date.getDay()]}, ${months[date.getMonth()]} ${date.getDate()}`

      const route = process.env.REACT_APP_BACKEND_URL + `jobs/jobs/byuser/${user.name}`
      axios.get(route)

      .then(res => {
        console.log(res.data)
          this.setState({
            jobs: res.data
          })
          console.log(this.state.jobs)
      })

      .catch((error) => {
          //console.log(error.response.data)
          console.log(error + " axios error");
      })



      this.setState({
        date: dateString
      })
    }


    render() {
      const { isAuthenticated, user } = this.props.auth0;
      console.log(this.props)

      return (
        <>
          {
            isAuthenticated ?
              <>

              <h1>Hi <span style={{textTransform: 'capitalize'}}>{user.nickname}</span></h1>

              <h2>Let’s track your journey today<span style={{float: 'right'}}>{this.state.date}</span></h2>
              <Row>
              <DragDropContext onDragEnd={this.onDragEnd}>
                <BoardColumn phaseName="Job Applications" jobs={this.state.jobs} openCreateModal={this.openCreateModal} edit={this.openEditModal}/>
              </DragDropContext>
              <Inspiration/>
              <Goals />
            </Row>

              </> :
              <>
                <h1>Welcome to Artemis</h1>
                <h2>Sign in to start your hunt!</h2>

              </>
          }
        </>
      )
    }
}

export default withAuth0(Dashboard);
