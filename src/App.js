import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import background from './galaxy.png'

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import CreateJob from "./components/create-job.component";
import EditJob from "./components/edit-job.component";
import JobList from "./components/job-list.component";
// import JobList from "./components/job-list.component";
// import CreateJob from "./components/create-job.component";

import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from './components/partials/LoginButton';
import LogoutButton from './components/partials/LogoutButton';
import AddJob from './components/AddJob'
import AddContacts from "./components/AddContacts";
import WeeklyGoals from "./components/WeeklyGoals";
import TodaysGoals from "./components/TodaysGoals";

function App() {
  const { isLoading } = useAuth0();
  const imgSrc = 'https://s3-alpha-sig.figma.com/img/fd4f/d6de/1c1a019bb8ef9738de008687403f1f07?Expires=1626048000&Signature=U8BnQa4TwxiHOpsX0UVyZE491JJL92vuSYJuDrKrgFiWZY-lachk7B0s3sYQm3bkZF588bOVsa-8D3EGHGYOJaoGWBeF5mzkxdIjD0-HmzJy9hTi4L8S3RihAVYlbg-5m29x6HyYAJJcpmHSpBnlEm4uvt1tLwb6hA4ae9VqGxO~ban3VGkreUy-6SBmz8RE44gzFWV0bR-SbEnMzhn4o-eBDYxryXdLB1F8I2K8~Vkgzy8O~Hl3yZXO3-YH8ps25VZXDztAd4y0AhpYd6ngcfx5gy09jB5Et6kJA~4ezXuyaxfq5B8sx7awl4RTzB0IbLJ-jS3XuzxcQbrFx7JsLA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
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
          <img src={imgSrc} alt='galaxy' />
        </header>
        <Container>
          {/* <Row>
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
          </Row> */}
          <div className="components">
            <AddJob />
            <AddContacts />
            <div className="goals">
              <WeeklyGoals />
              <TodaysGoals />
            </div>
            <div className="reminders_and_inspiration">

            </div>
          </div>
        </Container>
      </div>
    </Router>
  );
}

export default App;