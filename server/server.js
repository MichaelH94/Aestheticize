// Initializations
const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");
const logger = require("morgan");
const path = require("path");

const PORT = process.env.PORT || 3000;
const app = express();

// Database connection
let MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";

mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI, { useNewUrlParser: true});

let db = mongoose.connection; 
db.once("open", () => console.log("Database running."));

// Middleware
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(express.json());
app.use(express.static(
    "public"
));

// app.use(require("./controllers/ctrl.js"))
app.get('/api/hello', (req, res) => {
    res.send({ express: 'Hello From Express' });
  });

  app.use((req, res) => {
    res.sendFile(path.join(__dirname, "../client/public/index.html"));
  });

app.listen(PORT, ()=> {
    console.log('Aestheticize Backend listening on PORT: ' + PORT)
});

