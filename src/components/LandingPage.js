import react from "react"
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Icon from '../components/icon.component'
import LoginButton from '../components/partials/LoginButton';


function LandingPage() {
    return <div>
    <header className="App-header">
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand>
              <Link to={"/"} className="nav-link site-title">
                <Icon iconName="arrow" size="xl"/> Artemis
              </Link>
              <p className="sign-in-para">Already have an accout? <LoginButton /></p>
            </Navbar.Brand>
              <LoginButton />
          </Container>
        </Navbar>
      </header>
    </div>
}

export default LandingPage