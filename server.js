require('dotenv').config()
const mongoose = require("mongoose");
const express = require('express');
const app = express();
const path = require('path');
const Auth0Strategy = require('passport-auth0')
const passport = require('passport');
const session = require('express-session');

const PORT = process.env.PORT || 3000;

const strategy = new Auth0Strategy({
  domain: process.env.AUTH0DOMAIN,
  clientID: process.env.AUTH0ID, 
  clientSecret: process.env.AUTH0SECRET,
  callbackURL: '/callback',
  state: false
},(accessToken, refreshToken, extraParams, profile, done) => 
 {
   return done(null, profile);
 });

 passport.use(strategy);

 passport.serializeUser((user,done) => {
   done(null, user)
 })

 passport.deserializeUser((user,done) => {
  done(null, user)
})

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(passport.initialize())

var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";

mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI, { useNewUrlParser: true });


app.listen(PORT, () => {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});


// ROUTES 

app.get('/callback',
  passport.authenticate('auth0', { failureRedirect: '/login' }, ),
  (req, res)=> {
    if (!req.user) {
      throw new Error('user null');
    }
    res.redirect("/");
  }
);

app.get('/login',
  passport.authenticate('auth0', {}), (req, res) => {
  res.redirect("/");
});

app.get('/', (req,res) =>{
  res.sendFile(path.join(__dirname+'/public/index.html'))
});
