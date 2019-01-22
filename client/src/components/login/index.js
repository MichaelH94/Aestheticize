import React, { Component } from "react";
import { Button, FormGroup, FormControl } from "react-bootstrap";
import axios from 'axios';
import "./login.css";
import logo from '../../brand.png';

export default class Login extends Component {
    constructor() {
        super()
        this.state = {
            username: '',
            password: '',
            redirectTo: null
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
  
    }
  
    validateForm() {
      return this.state.username.length > 0 && this.state.password.length > 0;
    }
  
    handleChange(event) {
      this.setState({
        [event.target.name]: event.target.value
      });
    }
  
    handleSubmit(event) {
      event.preventDefault()
      console.log(this.state.username + " " + this.state.password)

      axios
          .post('/user/login', {
              username: this.state.username,
              password: this.state.password
          })
          .then(response => {
              console.log('login response: ')
              console.log(response)
              if (response.status === 200) {
                  // update App.js state
                  this.props.updateUser({
                      loggedIn: true,
                      username: response.data.username
                  })
                  // update the state to redirect to home
                  this.setState({
                      redirectTo: '/'
                  })
              }
          }).catch(error => {
              console.log('login error: ')
              console.log(error);
              
          })
  }

    render() {
      return (
        <div className="container">
            <div className="Login">
            <form onSubmit={this.handleSubmit}>
            <img src={logo} />
                <FormGroup controlId="username" bsSize="large">
                <FormControl
                    autoFocus
                    placeholder="Username"
                    name="username"
                    type="username"
                    defaultValue={this.state.username}
                    onChange={this.handleChange}
                />
                </FormGroup>
                <FormGroup controlId="password" bsSize="large">
                <FormControl
                    placeholder="Password"
                    defaultValue={this.state.password}
                    onChange={this.handleChange}
                    type="password"
                    name="password"
                />
                </FormGroup>
                <Button className="loginbtn"
                    block
                    bsSize="large"
                    // disabled={!this.validateForm()}
                    onClick={this.handleSubmit}
                    type="submit"
                >
                Login
                </Button>
                <Button className="loginbtn"
                    block
                    bsSize="large"
                    type="submit"
                >
                Create Account
                </Button>
            </form>

            </div>
        </div>
      );
    }
  }