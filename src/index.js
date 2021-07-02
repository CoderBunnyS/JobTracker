import React from "react";
import ReactDOM from "react-dom";
<<<<<<< HEAD
import { BrowserRouter } from "react-router-dom";
import { Auth0Provider }from '@auth0/auth0-react';
=======
import { BrowserRouter, Switch, Route } from "react-router-dom";
import JobList from "./components/job-list.component";
import CreateJob from './components/create-job.component'
>>>>>>> 0f069c6d971809809f042e02aa5be6843cee5a0e

import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

<<<<<<< HEAD
const domain = process.env.REACT_APP_AUTH0_DOMAIN
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID

ReactDOM.render(
  <BrowserRouter>
  <Auth0Provider
  domain={domain}
  clientId={clientId}
  redirectUri={window.location.origin}>
    <App />
  </Auth0Provider>
  </BrowserRouter>,
  document.getElementById("root")
=======
const routes = (
  <BrowserRouter>
    <Switch>
    <Route exact path='/' component={CreateJob} />
    <Route path = "/create-job" component={CreateJob} />
    </Switch>
    
  </BrowserRouter>
)
ReactDOM.render(routes, document.getElementById("root")
  


>>>>>>> 0f069c6d971809809f042e02aa5be6843cee5a0e
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();