import react from "react"
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Icon from '../components/icon.component'
import LoginButton from '../components/partials/LoginButton';
import "../styles/landingPage.css"



function LandingPage() {
    return <div className="landingPage">
    {/* <header className="App-header">
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
      </header> */}
    <div className="linkRow">
    {/* <Navbar>
  <Navbar.Text href="#why">Why Artemis?</Navbar.Text>
    <Navbar.Text href="#Dashboard">Dashboard Features</Navbar.Text>
    <Navbar.Text href="#About">About Us</Navbar.Text>
</Navbar> */}
      </div>
      <div className="whySection">
          <div className="LPSection">
          <div className="LPPara">
          <h1>Your job search just got a lot more organized.</h1>
          <p>Artemis’ job search tracking tool helps you track your job search stages, your networking contacts, and your progress while providing you with the tips and encouragement to meet your goals.</p>
          <LoginButton className="landingSignIn"/>

          </div>
          <div className="searchImage">
            <img src="/images/landingPage.png" alt="Artemis Screenshot" className="LPimage"></img>
          </div>

          </div>
          <div className="LPSection">
              <div className="searchImage">
              <img src="/images/situp.png" alt="woman sitting up" className="LPimage"></img>
              </div>
              <div className="LPPara">
                  <h1>Build resilience with well-being tracking and tips.</h1>
                  <p>We know the journey to accomplishing your goals is tough. We are here to remind you to take care of your well-being so that you can put your best foot forward in your job search.</p>
              </div>
          </div>
      </div>
    <div className="features">
        <h2 id="featuresHeading">Features</h2><br></br>
        <div className="featureRow">
            <img src="" alt="screenshot"></img>
            <img src="" alt="screenshot"></img>
            <img src="" alt="screenshot"></img>
        </div>
        <div className="featureRow">
        <img src="" alt="screenshot"></img>
            <img src="" alt="screenshot"></img>
            <img src="" alt="screenshot"></img>
        </div>
    </div>
    <div className="testimonialSection">
        <h2 className="testimonialHeader">See What Other People Say</h2>
    <div className="testimonials">
    <div className="testimonial1">
        <img src="" alt="userPicture" className="testPhoto" /><p>“Artemis has helped me to see the huge amount of progress I’ve made over time, which is really helpful especially on days when I get discouraged.”<br>
        </br>
        Brittany, 30
        </p>
        </div>
        <div className="testimonial2">
       
        <img src="" alt="userPicture" />
        <p>“I love that Artemis values my well-being as much as my goals. It has been a great reminder that I am a person before I am a job seeker.”<br>
        </br>
        Mark, 25
        </p>
        </div>
        <div className="testimonial3">
        <img src="" alt="userPicture" />
        <p>“I have been able to feel much more confident in my ability to find a job thanks to the help of Artemis’ pro tips and progress visualization feature. 10/10 recommend.”<br>
        </br>
        Phillip, 34
        </p>
        </div>
    </div>
    </div>
    <div className="actionCall">
        <h1>Join the other 344,439 people accomplishing their goals!</h1>
        <button className="signUp">Sign Up</button>
    </div>
    </div>
}

export default LandingPage