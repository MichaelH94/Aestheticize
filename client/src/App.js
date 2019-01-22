import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Header from './components/header';
import Post from './components/post'

class App extends Component {
  render() {
    return <Router>
   <div className="App">
    <Header />
      <section className="App-main">
        <Route exact path="/" component={Post}/>
      </section>

    </div>
    </Router>
  }
}

export default App;