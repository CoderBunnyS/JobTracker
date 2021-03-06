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
          <button id="landingSignIn"><LoginButton /></button>

          </div>
          <div className="searchImage">
            <img src="/images/landingPage.png" alt="Artemis Screenshot" className="LPimage"></img>
          </div>

          </div>
          <div className="LPSection">
              <div className="searchImage">
              <img src="/images/situp.png" alt="woman sitting up" className="LPimage2"></img>
              </div>
              <div className="LPPara">
                  <h1>Build resilience with well-being tracking and tips.</h1>
                  <p>We know the journey to accomplishing your goals is tough. We are here to remind you to take care of your well-being so that you can put your best foot forward in your job search.</p>
              </div>
          </div>
      </div>
    <div className="features">
        <h2 class="LPHeading">Features</h2><br></br>
        <div className="featureRow">
            <p className="featureImgText"><img src="/images/featureImg1.png" alt="screenshot"></img><br />Track each stage of the job process</p>
            <p className="featureImgText"><img src="/images/featureImg2.png" alt="screenshot"></img><br />Progress Tracking</p>
            <p className="featureImgText"><img src="/images/featureImg3.png" alt="screenshot"></img><br />Daily Reminders</p>
        </div>
        <div className="featureRow">
        <p className="featureImgText"><img src="/images/featureImg4.png" alt="screenshot"></img><br />Daily inspiration</p>
        <p className="featureImgText"><img src="/images/featureImg5.png" alt="screenshot"></img><br />Well-being tips and reminders</p>
        <p className="featureImgText"><img src="/images/featureImg6.png" alt="screenshot"></img><br />Track your weekly goals</p>
        </div>
    </div>
    <div className="testimonialSection">
    <h2 className="LPHeading">See What Other People Say</h2>
    <div className="testimonials">
    <div className="testimonialBlurb" id="test1">
        <img src="/images/testImg1.png" alt="userPicture" className="testPhoto" />
        <p className="testPara">“Artemis has helped me to see the huge amount of progress I’ve made over time, which is really helpful especially on days when I get discouraged.”<br>
        </br>
        Brittany, 30
        </p>
        </div>
        <div className="testimonialBlurb" id="test2">
       
        <img src="/images/testImg2.png" alt="userPicture" />
        <p className="testPara">“I love that Artemis values my well-being as much as my goals. It has been a great reminder that I am a person before I am a job seeker.”<br>
        </br>
        Mark, 25
        </p>
        </div>
        <div className="testimonialBlurb" id="test3">
        <img src="/images/testImg3.png" alt="userPicture" />
        <p className="testPara">“I have been able to feel much more confident in my ability to find a job thanks to the help of Artemis’ pro tips and progress visualization feature. 10/10 recommend.”<br>
        </br>
        Phillip, 34
        </p>
        </div>
    </div>
    </div>
    <div >
        <h1 className="actionCall">Join the other 344,439 people accomplishing their goals!</h1>
        <button className="signUp">Sign Up</button>
    </div>
    </div>
}

export default LandingPage