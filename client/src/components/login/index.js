import React, { Component } from "react";
import { Button, FormGroup, FormControl } from "react-bootstrap";
import API from '../../services/account.js';
import "./login.css";
import logo from '../../brand.png';
import { Redirect } from 'react-router-dom';

export default class Login extends Component {

    constructor() {
        super()
        this.state = {
            username: '',
            password: '',
            redirectTo: null,
        }

        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.showCreate = this.showCreate.bind(this)
    }
  
    handleChange(event) {
      this.setState({
        [event.target.name]: event.target.value
      });
    }
  
    handleSubmit(event) {
      event.preventDefault()
      console.log(this.state.username + " " + this.state.password)

      API.login({
              username: this.state.username,
              password: this.state.password
          })
          .then(response => {
              console.log(response.data);
              const passUser = this.state.username
              const passAva = this.state.avatar
              this.props.updateLoggedIn(passUser, passAva)
          }).catch(error => {
              console.log(error);
          })
  }

  showCreate(event) {
    event.preventDefault();
    this.setState({
        redirectTo: "/create"
    })
    }

    render() {
        if (this.state.redirectTo) {
            return <Redirect to={{ pathname: this.state.redirectTo }} />
        } else {
      return (
        <div className="container">
            <div className="Login">
            <form onSubmit={this.handleSubmit}>
            <img src={logo} alt="Logo" />
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
                    onClick={this.handleSubmit}
                    type="submit"
                >
                Login
                </Button>
                <Button className="loginbtn"
                    block
                    bsSize="large"
                    onClick={this.showCreate}
                >
                Create Account
                </Button>

            </form>

            </div>
            
        </div>
      )
    }
}
}
