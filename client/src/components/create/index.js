import React, { Component } from "react";
import { Button, FormGroup, FormControl } from "react-bootstrap"
import logo from '../../brand.png';
import './create.css';
export default class Create extends Component {

    render() {
      return (
        <div className="container">
            <div className="Create">

            <form onSubmit={this.handleSubmit}>
            <img src={logo} />

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

                />
                </FormGroup>

                <h5>Enter a secure password you can remember.</h5>
                <FormGroup controlId="password" bsSize="large">
                <FormControl
                    placeholder="Password"
                    type="password"
                    name="password"
                />
                </FormGroup>
                <h5>How old are you?</h5>
                <FormGroup controlId="age" bsSize="large">
                <FormControl
                    placeholder="18"
                    type="number"
                    name="age"
                />
                </FormGroup>

                <h5>Next, we'll need an avatar. It doesn't have to be you. Use a direct link.</h5>
                <FormGroup controlId="avatar" bsSize="large">
                <FormControl
                    placeholder="i.imgur.com/example"
                    type="text"
                    name="avatar"
                />
                </FormGroup>

                <h4>Aestheticize generates a starter profile in order to get you some connections immediately, so let's get some of your interests.</h4>

                  <h5>What's your favorite band/artist?</h5>
                <FormGroup controlId="music" bsSize="large">
                <FormControl
                    placeholder="Radiohead"
                    type="text"
                    name="music"
                />
                </FormGroup>

                <h5>What's your favorite movie?</h5>
                <FormGroup controlId="movie" bsSize="large">
                <FormControl
                    placeholder="The Godfather"
                    type="text"
                    name="movie"
                />
                </FormGroup>

                <h5>What's your favorite video game?</h5>
                <FormGroup controlId="game" bsSize="large">
                <FormControl
                    placeholder="Super Smash Bros"
                    type="text"
                    name="game"
                />
                </FormGroup>
                <h4>Once you've got everything filled out, go ahead and create an account and we'll get to work.</h4>
                <Button className="createAccount"
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
  