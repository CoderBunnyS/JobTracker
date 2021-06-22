import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';

var mongoURI = 'http://localhost:4000/jobs/delete-job';
const { id } = req.query;

deleteUser(id) {
    axios.delete(`${mongoURI}/${params: { id }`
    })
    // .then(response => {
    //     // this.setState({ users: response.data });
    //     console.log('deleteUser response', response, this.state);
    // });
//}
export default deleteUser