import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/';
import Post from './components/Post/'
import Posts from './components/Posts/'
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from "react-apollo";
import Pusher from 'pusher-js';


const client = new ApolloClient({
  uri : "http://localhost:3000"
});

class App extends Component {
  constructor(){
    super();

    this.pusher = new Pusher("476f827739fd8fae9689", {
     cluster: 'us2',
     encrypted: true
    });
  }

  render() {
    return (
      <ApolloProvider client={client}>
        <div className="App">
          <Header />
          <section className="App-main">
            <Posts pusher={this.pusher} apollo_client={client}/>
          </section>
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
