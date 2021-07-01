import React, { Component } from "react";
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import JobTableRow from './JobTableRow';
import { withAuth0 } from "@auth0/auth0-react";
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
              <h1>Welcome, {user.name.split('@')[0]}</h1>
              <h2>Track jobs today!</h2>
              </> :
            <h1>y</h1>
          }
        </>
      )
    }
}

export default withAuth0(Dashboard);
