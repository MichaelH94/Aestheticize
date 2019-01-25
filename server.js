// Initializations
const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");
const logger = require("morgan");
const path = require("path");
const passport = require('passport');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session)

// Route initializiations 
const user = require('./routes/user.js')


const PORT = process.env.PORT || 3001;
const app = express();


// Database connection
let MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoheadlines";

mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI, { useNewUrlParser: true});

let db = mongoose.connection; 
db.once("open", () => console.log("Database running."));

// Middleware
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(express.json());
app.use(express.static(path.join(__dirname, '/client/public')))

// Express-session
app.use(session({
    secret: 'zxcv',
    store: new MongoStore({ mongooseConnection: db }),
    resave: false, 
    saveUninitialized: false
}));

// Heroku configuration
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
  }

// Passport
app.use(passport.initialize());
app.use(passport.session())

app.use('/user', user)

// ROUTES
  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/public/index.html'))
  });

app.listen(PORT, ()=> {
    console.log('Aestheticize Backend listening on PORT: ' + PORT)
});

