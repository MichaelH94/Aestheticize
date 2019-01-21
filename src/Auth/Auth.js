import auth0 from 'auth0-js';
import createHistory from '../history';

export default class Auth {
  accessToken;
  idToken;
  expiresAt;
  userProfile;

  auth0 = new auth0.WebAuth({
    domain: 'aestheticize.auth0.com',
    clientID: 'TyzE55dgogtspK6GrTm5KwUeYOHZDMm8',
    redirectUri: 'http://localhost:3000/callback',
    responseType: 'token id_token',
    scope: 'openid profile'
  });

  login() {
    this.auth0.authorize();
  }

  constructor() {
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.handleAuthentication = this.handleAuthentication.bind(this);
    this.isAuthenticated = this.isAuthenticated.bind(this);
    this.getAccessToken = this.getAccessToken.bind(this);
    this.getIdToken = this.getIdToken.bind(this);
    this.renewSession = this.renewSession.bind(this);
    this.getProfile = this.getProfile.bind(this);
  }

  handleAuthentication() {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setSession(authResult);
      } else if (err) {
        history.replace('/home');
        console.log(err);
        alert(`Error: ${err.error}. Check the console for further details.`);
      }
    });
  }

  getAccessToken() {
    return this.accessToken;
  }

  getIdToken() {
    return this.idToken;
  }

  setSession(authResult) {
    localStorage.setItem('isLoggedIn', 'true');
    let expiresAt = (authResult.expiresIn * 1000) + new Date().getTime();
    this.accessToken = authResult.accessToken;
    this.idToken = authResult.idToken;
    this.expiresAt = expiresAt;
    history.replace('/home');
  }

  renewSession() {
    this.auth0.checkSession({}, (err, authResult) => {
       if (authResult && authResult.accessToken && authResult.idToken) {
         this.setSession(authResult);
       } else if (err) {
         this.logout();
         console.log(err);
         alert(`Could not get a new token (${err.error}: ${err.error_description}).`);
       }
    });
  }

  getProfile(cb) {
    this.auth0.client.userInfo(this.accessToken, (err, profile) => {
      if (profile) {
        this.userProfile = profile;
      }
      cb(err, profile);
    });
  }

  logout() {
    this.accessToken = null;
    this.idToken = null;
    this.expiresAt = 0;
    this.userProfile = null;
    localStorage.removeItem('isLoggedIn');

    history.replace('/home');
  }

  isAuthenticated() {
    let expiresAt = this.expiresAt;
    return new Date().getTime() < expiresAt;
  }


}
