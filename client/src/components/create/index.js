import React, { Component } from "react";
import { Button, FormGroup, FormControl } from "react-bootstrap"
import logo from '../../brand.png';
import './create.css';
import API from "../../services/account.js";

export default class Create extends Component {
// import service 
    constructor() {
        super()
        this.state = {
            username: '',
            password: '',
            age: '',
            avatar: '',
            music: '',
            movie: '',
            game: '',  
        }

        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleSubmit(event) {
        console.log("ok");
        event.preventDefault();
      API.create({
            username: this.state.username,
            password: this.state.password,
            avatar: this.state.avatar,
            age: this.state.age,
            favMusic: this.state.music,
            favMovie: this.state.movie,
            favGame: this.state.game
            
        }).then(response => {
            console.log(response)
        }).catch(err => console.log(err.response))
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    render() {
      return (
        <div className="container">
            <div className="Create">

            <form onSubmit={this.handleSubmit}>
            <img src={logo} alt="logo" />

                <FormGroup controlId="password" bsSize="large">
                <h2>Welcome to your Aestheticize account creation form. Aestheticize is driven by its users, so once you've got your account
                  created, you can choose what content you upload. For now, we'll ask a few basic questions in order to get your connections set up. 
                  Please fill out the information below.
                </h2>
                <h5>Choose a username. Something unique.</h5>
                <FormControl
                    autoFocus
                    placeholder="Username"
                    name="username"
                    type="username"
                    defaultValue={this.state.username}
                    onChange={this.handleChange}

                />
                </FormGroup>
                <h5>Enter a secure password you can remember.</h5>
                <FormGroup controlId="password" bsSize="large">
                <FormControl
                    placeholder="Password"
                    type="password"
                    name="password"
                    defaultValue={this.state.password}
                    onChange={this.handleChange}
                />
                </FormGroup>
                <h5>How old are you?</h5>
                <FormGroup controlId="age" bsSize="large">
                <FormControl
                    placeholder="18"
                    type="number"
                    name="age"
                    defaultValue={this.state.age}
                    onChange={this.handleChange}
                />
                </FormGroup>

                <h5>Next, we'll need an avatar. It doesn't have to be you. Use a direct link.</h5>
                <FormGroup controlId="avatar" bsSize="large">
                <FormControl
                    placeholder="i.imgur.com/example"
                    type="text"
                    name="avatar"
                    defaultValue={this.state.avatar}
                    onChange={this.handleChange}
                />
                </FormGroup>

                <h4>Aestheticize generates a starter profile in order to get you some connections immediately, so let's get some of your interests.</h4>

                  <h5>What's your favorite band/artist?</h5>
                <FormGroup controlId="music" bsSize="large">
                <FormControl
                    placeholder="Death Grips"
                    type="text"
                    name="music"
                    defaultValue={this.state.music}
                    onChange={this.handleChange}
                />
                </FormGroup>

                <h5>What's your favorite movie?</h5>
                <FormGroup controlId="movie" bsSize="large">
                <FormControl
                    placeholder="Jurassic Park"
                    type="text"
                    name="movie"
                    defaultValue={this.state.movie}
                    onChange={this.handleChange}
                />
                </FormGroup>

                <h5>What's your favorite video game?</h5>
                <FormGroup controlId="game" bsSize="large">
                <FormControl
                    placeholder="Super Smash Bros"
                    type="text"
                    name="game"
                    defaultValue={this.state.game}
                    onChange={this.handleChange}
                />
                </FormGroup>
                <h4>Once you've got everything filled out, go ahead and create an account and we'll get to work.</h4>
                <Button className="createAccount"
                    block
                    bsSize="large"
                    type="submit"
                    onClick={this.handleSubmit}
                >
                Create Account
                </Button>

            </form>

            </div>
            
        </div>
      );
    }
  }
  