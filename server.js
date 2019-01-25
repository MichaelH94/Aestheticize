// Initializations
const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const logger = require("morgan");
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


// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Express-session
app.use(session({
    secret: 'zxcv',
    store: new MongoStore({ mongooseConnection: db }),
    resave: false, 
    saveUninitialized: false
}));

// Define API routes here
// Passport
app.use(passport.initialize());
app.use(passport.session())

app.use('/user', user)

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
