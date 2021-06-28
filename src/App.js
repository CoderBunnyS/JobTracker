import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.css";
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

function App() {
  const { isLoading } = useAuth0();

  return (
  <Router>
    <div className="App">
      <header className="App-header">
        <Navbar bg="dark" variant="dark">
          <Container>
            <LoginButton />
            <LogoutButton />

            <Navbar.Brand>
              <Link to={"/create-job"} className="nav-link">
                Artemis Job Tracker
              </Link>
            </Navbar.Brand>

            <Nav className="justify-content-end">
              <Nav>
                <Link to={"/create-job"} className="nav-link">
                  Create Job
                </Link>
              </Nav>



              <Nav>
                <Link to={"/job-list"} className="nav-link">
                  Job List
                </Link>
              </Nav>
            </Nav>

          </Container>
        </Navbar>
      </header>
      <Container>
        <Row>
          <Col md={12}>
            <div className="wrapper">
              <Switch>
                <Route exact path='/' component={CreateJob} />
                <Route path="/create-job" component={CreateJob} />
                <Route path="/edit-job/:id" component={EditJob} />
                <Route path="/job-list" component={JobList} />
              </Switch>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  </Router>
  );
}

export default App;