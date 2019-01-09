const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3000;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(routes);

var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";

mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI, { useNewUrlParser: true });


app.listen(PORT, () => {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
