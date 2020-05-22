var express = require("express")
var mongoose = require("mongoose")
var routes = require("./routes")

var app = express()
var PORT = (process.env.PORT || 3001)

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB using mLab
mongoose.connect(process.env.MONGODB_URI || "mongodb://kyle:password1@ds143071.mlab.com:43071/heroku_s8r3tpb3");

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
