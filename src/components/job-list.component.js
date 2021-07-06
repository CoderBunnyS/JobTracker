import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import JobTableRow from './JobTableRow';
import { withAuth0 } from '@auth0/auth0-react';
//import { Switch, Route, Link } from "react-router-dom"
import createJobComponent from "./create-job.component";
import CreateModal from "./createModal";
import Button from "react-bootstrap/Button"
import Row from "react-bootstrap/Row"
import Container from "react-bootstrap/Container"

import EditModal from "./editModal"
import {DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import Card from 'react-bootstrap/Card'
import BoardColumn from './BoardColumn.js'
import { resetServerContext } from "react-beautiful-dnd"




resetServerContext()


//const mongoURI = "mongodb+srv://TrackerAdmin:TrackerAdminPassword@TrackerDatabase.euzmb.mongodb.net/TrackerDatabase?retryWrites=true&w=majority"
const serverRoute = "http://localhost:4000/jobs/jobs"



class JobList extends Component {
    constructor(props) {
        super(props)
        this.openCreateModal = this.openCreateModal.bind(this);
        this.closeCreateModal = this.closeCreateModal.bind(this);
        this.AddNewJobToList = this.AddNewJobToList.bind(this);
        this.openEditModal = this.openEditModal.bind(this);
        this.closeEditModal = this.closeEditModal.bind(this);
        this.EditOneJobFromList = this.EditOneJobFromList.bind(this);
        this.onDragEnd = this.onDragEnd.bind(this);

        this.state = {
            jobs: {'wishlist': [], 'applied': [], 'interview': [], 'offers': [], 'archive': [], 'all': []},
            showCreateModal: false,
            showEditModal: false,
            activeJob: {},
            activeJobIndex: -1,
            activePhase: 'wishlist',
        };
    }

    deleteItem(index){
      const newJobs = [...this.state.jobs];
      newJobs.splice(index, 1)
      this.setState({
        jobs: newJobs
      })
    }
    openCreateModal(phaseName){
      this.setState({
        activePhase: phaseName.toLowerCase(),
        showCreateModal: true
      })
    }
    openEditModal(i){
      console.log(this.state.jobs[i])
      const myJob = this.state.jobs[i]
      this.setState({
        showEditModal: true,
        activeJob: myJob,
        activeJobIndex: i
      })
    }
    closeCreateModal(){
      console.log(this.state.showCreateModal)
      this.setState({
        showCreateModal: false
      })
    }
    closeEditModal(){
      this.setState({
        showEditModal: false
      })
    }

    AddNewJobToList(jobObject) {
      console.log(this.state.activePhase)
      const jobsArr = this.state.jobs[this.state.activePhase];
      const updatedJobsArray = [...jobsArr];
      updatedJobsArray.push(jobObject)
      this.setState({
        jobs: {
          ...this.state.jobs,
          [this.state.activePhase]: updatedJobsArray
        }
      })
    }

    EditOneJobFromList(jobObject) {
      const updatedJobsArray = [...this.state.jobs];
      updatedJobsArray[this.state.activeJobIndex] = jobObject
      this.setState({
        jobs: updatedJobsArray
      })
    }

    onDragEnd = result => {
      const { destination, source, draggableId } = result;

      if (!destination) {
        return;
      }

      if (
        destination.droppableId === source.droppableId &&
        destination.index === source.index
      ) {
        return;
      }

      console.log(destination, source, draggableId)
      const srcColName = source.droppableId.toLowerCase();
      const destColName = destination.droppableId.toLowerCase();

      const newSourceCol = [...this.state.jobs[srcColName]]
      const newDestCol = [...this.state.jobs[destColName]]

      const movedItem = newSourceCol.splice(source.index, 1)[0];
      console.log("smu", movedItem)
      console.log(newSourceCol)

      if (srcColName === destColName) {
        newSourceCol.splice(destination.index, 0, movedItem);
      } else {
        newDestCol.splice(destination.index, 0, movedItem);
      }


      const newJobsObj = {
        ...this.state.jobs,
        [srcColName]: newSourceCol,
      }

      if (srcColName !== destColName) newJobsObj[destColName] = newDestCol

      console.log(newJobsObj)

      this.setState({
        jobs: newJobsObj,
      })

      // const column = this.state.columns[source.droppableId];
      // const newTaskIds = Array.from(column.taskIds);
      // newTaskIds.splice(source.index, 1);
      // newTaskIds.splice(destination.index, 0, draggableId);
      //
      // const newColumn = {
      //   ...column,
      //   taskIds: newTaskIds,
      // };
      //
      // const newState = {
      //   ...this.state,
      //   columns: {
      //     ...this.state.columns,
      //     [newColumn.id]: newColumn,
      //   },
      // };
      //
      // this.setState(newState);
    }

    componentDidMount() {
        const { isAuthenticated, user } = this.props.auth0;
        console.log(user)

        if (isAuthenticated) {
          const route = process.env.REACT_APP_BACKEND_URL + `jobs/jobs/byuser/${user.name}`

          axios.get(route)

          .then(res => {
            console.log(res.data)
              this.setState({
                jobs: this.parseJobs(res.data),
              })
              console.log(this.state.jobs)
          })

          .catch((error) => {
              //console.log(error.response.data)
              console.log(error + " axios error");
          })

        }
    }


    parseJobs = jobs => {
      return {
        all: jobs,
        wishlist: jobs.filter(x => x.phase === 'undefined' || x.phase.toLowerCase() === "wishlist"),
        applied: jobs.filter(x => x.phase.toLowerCase() === "applied"),
        interview: jobs.filter(x => x.phase.toLowerCase() === "interview"),
        offers: jobs.filter(x => x.phase.toLowerCase() === "offers"),
        archive: jobs.filter(x => x.phase.toLowerCase() === "archive"),
      }
    }

    DataTable(){
        return (
          <>
            {this.state.jobs.map((res, i) => (
              <JobTableRow
                obj={res}
                key={i}
                JL={this}
                edit = {() => this.openEditModal(i)}
                remove={() => this.deleteItem(i)}
              />
            ))
            }
        </>
      )
    }
    render() {
        // console.log(this.state.jobs)

        return (<div className="table-wrapper">

          {/* <Link to="/create-job">Create Job</Link> */}
          <h1>Jobs</h1>
          <h2>keep track of the jobs your applying to</h2>

          { this.state.showCreateModal &&
            <CreateModal
              handleNew = {this.AddNewJobToList}
              handleHide={this.closeCreateModal}
              phase={this.state.activePhase}
            />
          }

          { this.state.showEditModal &&
            <EditModal
              Data = {this.state.activeJob}
              handleHide={this.closeEditModal}
              handleUpdate = {this.EditOneJobFromList}
            />
          }
          <Row>
          <DragDropContext onDragEnd={this.onDragEnd}>
            <BoardColumn phaseName="Wishlist" jobs={this.state.jobs['wishlist']} openCreateModal={this.openCreateModal}/>
            <BoardColumn phaseName="Applied" jobs={this.state.jobs['applied']} openCreateModal={this.openCreateModal}/>


          </DragDropContext>
        </Row>
        </div>);
      }
    }

export default withAuth0(JobList)
