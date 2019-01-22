import React, { Component } from 'react';
import './App.css';
import Header from './components/header';
import Post from './components/post'

class App extends Component {
  render() {
    return <div className="App">
    <Header />

      <section className="App-main">
      <Post username="Mike" avatar="https://i.imgur.com/Rqoc2Zh.jpg" caption="Here's a placeholder image." image="https://i.imgur.com/JynDHo7.jpg" />
      <Post username="Mike" avatar="https://i.imgur.com/Rqoc2Zh.jpg" caption="#zxcv wins again!" image="https://i.imgur.com/ti6Kedj.png" />
      <Post username="Ian" avatar="https://i.imgur.com/JMCi04X.jpg" caption=":)" image="https://i.imgur.com/0DuPjX6.jpg" />
      </section>

    </div>

  }
}

export default App;