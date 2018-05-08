// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;
// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// List of patrons
// =============================================================
var patrons = [
  {
    name: "Jennifer Samson",
    phoneNumber: "952-984-2333",
    email: "jensamson@gmail.com",
    uniqueId: 900,
  },
];
// Routes
// =============================================================
// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
  res.send("Welcome to Hot Restaurant!")
  res.sendFile(path.join(__dirname, "index.html"));
});
// Displays all patrons
app.get("/api/patrons", function(req, res) {
  return res.json(patrons);
});
// Displays a single Patron, or returns false
app.get("/api/patrons/:Patron", function(req, res) {
  var chosen = req.params.Patron;
  console.log(chosen);
  for (var i = 0; i < patrons.length; i++) {
    if (chosen === patrons[i].routeName) {
      return res.json(patrons[i]);
    }
  }
  return res.json(false);
});
// Create new reservation - takes in JSON input
app.post("/api/patrons", function(req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body-parser middleware
  var newPatron = req.body;
  console.log(newPatron);
  // We then add the json the user sent to the Patron array
  patrons.push(newPatron);
  // We then display the JSON to the users
  res.json(newPatron);
});
// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
