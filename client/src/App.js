import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
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