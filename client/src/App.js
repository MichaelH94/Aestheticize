import React, { Component } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
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
    if(this.state.LoggedIn) {
     return (
       <Router>
      <div className="App">
       <Header />
       <Post />
       </div>
       </Router>
     )   
    } else {

    return (
        <Router>
        <div className="App">
        <Header />
        <div className="Main">
        <Login />
        </div>
        <Footer />
        </div>
        </Router>
      );
    }
  }
}

export default App;