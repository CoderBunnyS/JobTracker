import react from "react"
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Icon from '../components/icon.component'
import LoginButton from '../components/partials/LoginButton';
import "../styles/landingPage.css"
import screenShot from "../styles/LP.svg"


function LandingPage() {
    return <div className="landingPage">
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
    <div className="linkRow">
    <Navbar>
  <Navbar.Text href="#why">Why Artemis?</Navbar.Text>
    <Navbar.Text href="#Dashboard">Dashboard Features</Navbar.Text>
    <Navbar.Text href="#About">About Us</Navbar.Text>
</Navbar>
      </div>
      <div className="whySection">
          <div className="searchSection">
          <div className="searchPara">
          <h1>Your job search just got a lot more organized.</h1>
          <p>Artemis’ job search tracking tool helps you track your job search stages, your networking contacts, and your progress while providing you with the tips and encouragement to meet your goals.</p>
          <LoginButton />

          </div>
          <div className="searchImage">
            <img src="../styles/LP.svg" alt="Artemis Screenshot" className="image"></img>
          </div>

          </div>
          <div className="trackingSection">
              <div className="searchImage">
              <img src="" alt="woman sitting up" className="image"></img>
              </div>
              <div className="trackingPara">
                  <h1>Build resilience with well-being tracking and tips.</h1>
                  <p>We know the journey to accomplishing your goals is tough. We are here to remind you to take care of your well-being so that you can put your best foot forward in your job search.</p>
              </div>
          </div>
      </div>
    <div className="features">
        
    </div>
    </div>
}

export default LandingPage