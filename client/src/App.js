import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from 'axios'
import './App.css';
import Header from './components/header';
import Post from './components/post';
import Login from './components/login';
import Create from './components/create';
import Footer from './components/footer';

class App extends Component {
  constructor() {
    super()
    this.state = {
      loggedIn: false,
      username: null
    }

    this.getUser = this.getUser.bind(this)
    this.componentDidMount = this.componentDidMount.bind(this)
    this.updateUser = this.updateUser.bind(this)
  }

  componentDidMount() {
    this.getUser()
  }

  updateUser (userObject) {
    this.setState(userObject)
  }

  getUser() {
    axios.get('/user').then(response => {
      console.log('Get user response: ')
      console.log(response.data)
      if (response.data.user) {
        console.log('Get User: There is a user saved in the server session: ')

        this.setState({
          loggedIn: true,
          username: response.data.user.username
        })
      } else {
        console.log('Get user: no user');
        this.setState({
          loggedIn: false,
          username: null
        })
      }
    })
  }

  render() {
    return (
      <Router>
      <div className="App">
      <Route exact path="/create" component={Create} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/" render={props =>
      <div>
        <Header />
        <Post username="Mike" avatar="https://i.imgur.com/Rqoc2Zh.jpg" caption="Placeholder" image="https://i.imgur.com/4Mitiko.jpg" />
        <Post username="GifTest" avatar="https://i.imgur.com/b1B1Epb.gif" caption="Gif Test" image="https://i.imgur.com/b1B1Epb.gif" />
        <Post username="Lydia" avatar="https://i.imgur.com/uaCtrd8.jpg" caption="This is placeholder text.This is placeholder text.This is placeholder text.This is placeholder text.This is placeholder text.This is placeholder text.This is placeholder text.This is placeholder text.This is placeholder text.This is placeholder text.This is placeholder text.This is placeholder text." image="https://i.imgur.com/uaCtrd8.jpg" />
        <Post username="Ian" avatar="https://i.imgur.com/PSzU2Si.jpg" caption="Placeholder text" image="https://i.imgur.com/JynDHo7.jpg" />
        <Footer /> 
      </div> }/>
      </div>
      </Router>
      
    )
    }
  }


export default App;