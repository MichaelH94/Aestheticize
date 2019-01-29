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
      age: null,
      avatar: null,
      showPosts: true
    }
    this.updateLoggedIn = this.updateLoggedIn.bind(this)
    this.showPosts = this.showPosts.bind(this)
  }

updateLoggedIn = (u, a, a2) => {
  console.log(u, a, a2)
    this.setState({
      username: u,
      avatar: a,
      age: a2,
      loggedIn: true
  })
  }

  showPosts() {
    if(this.state.showPosts) {
      this.setState({
        showPosts: false
      })
    } else {
      this.setState({
        showPosts: true
      })
    }
  }

  render() {
    return (
      <Router>
      <div className="App">
      <Route exact path="/create" component={Create} />
      <Route path="/" render={props => {
        if (this.state.loggedIn) {
          return <div>
            <Header username = {this.state.username} avatar = {this.state.avatar} age= {this.state.age} showPosts = {this.showPosts} />
            <br /> <br /> <br />
            {this.state.showPosts ? <Posts username = {this.state.username} avatar = {this.state.avatar} /> : ""}
            <br />
            </div>
        } else {
          return <div>
            <Login updateLoggedIn = {this.updateLoggedIn} />
            </div>
        }
      }} />
      <div className="Footer">
      <Footer />
      </div>   
      </div>
   
      </Router>
      
    )
    }
  }


export default App;