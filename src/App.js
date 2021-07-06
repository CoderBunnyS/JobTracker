import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import LandingPage from "./components/LandingPage";

import "./theme.scss";
import "./App.css";


import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


import CreateJob from "./components/create-job.component";
import EditJob from "./components/edit-job.component";
import JobList from "./components/job-list.component";
//import JobList from "./components/job-list.component";
//import CreateJob from "./components/create-job.component";

import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from './components/partials/LoginButton';
import LogoutButton from './components/partials/LogoutButton';
import Icon from './components/icon.component'
import Profile from './components/profile'
import Dashboard from './components/dashboard'

import BG from './components/PageBackground.component'

function App() {
  const { isLoading, isAuthenticated } = useAuth0();

  return (
  <Router>
    <LandingPage />
    <div className="App">
      <BG />
      <header className="App-header">
        <Navbar bg="dark" variant="dark">
          <Container>
            {/* <LoginButton /> */}
            {/* <LogoutButton /> */}

            <Navbar.Brand>
              <Link to={"/"} className="nav-link site-title">
                <Icon iconName="arrow" size="xl"/> Artemis
              </Link>


              {/* <CreateJob /> */}
              {/* <EditJob /> */}
              {/* <JobList /> */}
            </Navbar.Brand>

            <Nav className="justify-content-end">
              {
                isAuthenticated &&
                <Link to={"/create-job"} className="nav-link">
                  Create Job
                </Link>
              }

              <Link to={"/job-list"} className="nav-link">
                Jobs
              </Link>
              <Link to={"/profile"} className="nav-link">
                Profile
              </Link>
              <LoginButton />
            </Nav>

          </Container>
        </Navbar>
      </header>
      <Container>
        <Row>
          <Col md={12}>
            <div className="wrapper">
              <Switch>
                <Route exact path='/' component={Dashboard}/>
                <Route path="/create-job" component={CreateJob} />
                <Route path="/edit-job/:id" component={EditJob} />
                <Route path="/job-list" component={JobList} />
                <Route path="/profile" component={Profile} />

              </Switch>
            </div>
          </Col>
        </Row>
      </Container>
      <div>

      </div>
    </div>
  </Router>
  );
}

export default App;
