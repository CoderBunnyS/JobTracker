import React, { Component } from "react";
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import JobTableRow from './JobTableRow';
import { withAuth0 } from "@auth0/auth0-react";
import CreateModal from "./createModal";
// const { user, isAuthenticated, isLoading } = useAuth0();


//const mongoURI = "mongodb+srv://TrackerAdmin:TrackerAdminPassword@TrackerDatabase.euzmb.mongodb.net/TrackerDatabase?retryWrites=true&w=majority"
const serverRoute = "http://localhost:4000/jobs/jobs"

class Dashboard extends Component {

    constructor(props) {
        super(props)
        this.state = {
            jobs: []
        };
    }


    render() {
      const { isAuthenticated, user } = this.props.auth0;
      console.log(this.props)

      return (
        <>
          {
            isAuthenticated ?
              <>

              <h1>Welcome, <span style={{textTransform: 'capitalize'}}>{user.nickname}</span></h1>
              <h2>Track jobs today!</h2>

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
