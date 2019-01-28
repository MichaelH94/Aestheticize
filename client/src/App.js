import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Header from './components/header';
import Posts from './components/posts';
import Login from './components/login';
import Create from './components/create';
import Footer from './components/footer';

class App extends Component {
  constructor() {
    super()
    this.state = {
      loggedIn: false,
      username: null,
      avatar: null
    }
    this.updateLoggedIn = this.updateLoggedIn.bind(this)
  }

updateLoggedIn = (u, a) => {
  console.log(u, a)
    this.setState({
      username: u,
      avatar: a,
      loggedIn: true
  })

  }

  render() {
    return (
      <Router>
      <div className="App">
      <Route exact path="/create" component={Create} />
      {/* <Route exact path="/newlogin" component={Login} /> */}
      <Route path="/" render={props => {
        if (this.state.loggedIn) {
          return <div>
            <Header username = {this.state.username} avatar = {this.state.avatar}/>
            <Posts username = {this.state.username} avatar = {this.state.avatar} />
            </div>
        } else {
          return <div>
            <Login updateLoggedIn = {this.updateLoggedIn} />
            </div>
        }
      }} />
      <Footer />
      </div>
      </Router>
      
    )
    }
  }


export default App;