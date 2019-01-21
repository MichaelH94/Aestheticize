import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/';
import Post from './components/Post/'
import Posts from './components/Posts/'
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from "react-apollo";
import Pusher from 'pusher-js';
import { Navbar, Button } from 'react-bootstrap';

const client = new ApolloClient({
  uri : "http://localhost:3000"
});

class App extends Component {{
  goTo(route) {
    this.props.history.replace(`/${route}`)
  }

  login() {
    this.props.auth.login();
  }

  logout() {
    this.props.auth.logout();
  }

  componentDidMount() {
    const { renewSession } = this.props.auth;

    if (localStorage.getItem('isLoggedIn') === 'true') {
      renewSession();
    }
  }

  render() {
    const { isAuthenticated } = this.props.auth;

    return (
      <div>
        <Navbar fluid>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">Auth0 - React</a>
            </Navbar.Brand>
            <Button
              bsStyle="primary"
              className="btn-margin"
              onClick={this.goTo.bind(this, 'home')}
            >
              Home
            </Button>
            {
              !isAuthenticated() && (
                  <Button
                    bsStyle="primary"
                    className="btn-margin"
                    onClick={this.login.bind(this)}
                  >
                    Log In
                  </Button>
                )
            }
            {
              isAuthenticated() && (
                  <Button
                    bsStyle="primary"
                    className="btn-margin"
                    onClick={this.logout.bind(this)}
                  >
                    Log Out
                  </Button>
                )
            }
          </Navbar.Header>
        </Navbar>
      </div>
    );
  }
}

export default App;


// constructor(){
//   super();

//   this.pusher = new Pusher("476f827739fd8fae9689", {
//    cluster: 'us2',
//    encrypted: true
//   });
// }

// render() {
//   return (
//     <ApolloProvider client={client}>
//       <div className="App">
//         <Header />
//         <section className="App-main">
//           <Posts pusher={this.pusher} apollo_client={client}/>
//         </section>
//       </div>
//     </ApolloProvider>
//   );
// }