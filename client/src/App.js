import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import API from './services/api.js';
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
    API.get('/user').then(response => {
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
      <Route exact path="/" component={Login} />
      <Route exact path ="/index" render={props =>
      <div>
        <Header />
        <Post username="Mike" avatar="https://i.imgur.com/Rqoc2Zh.jpg" caption="Placeholder" image="https://i.imgur.com/4Mitiko.jpg" />
      </div> }/>
      <Footer />
      </div>
      </Router>
      
    )
    }
  }


export default App;