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
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Star Wars Characters (DATA)
// =============================================================
var names = [
  {
    routeName: "yoda",
    name: "Yoda",
    phone: "183792810",
    email: "soeroerwo@gmail.com",
    customerID: "whatever"
  },
  {
    routeName: "darthmaul",
    name: "Darth Maul",
    phone: "0982039580",
    email: "werwoso@gmail.com",
    customerID: "wfh"
  },
  {
    routeName: "obiwankenobi",
    name: "Obi Wan Kenobi",
    phone: "9874829184",
    email: "oiwkfj@gmail.com",
    customerID: "pof"
  }
];

var waitlist = [




]

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
  // res.send("Welcome to the Star Wars Page!")
  res.sendFile(path.join(__dirname, "view.html"));
});

// Get all reservation names
app.get("/table", function(req, res) {
  res.json(names);
});

//get all wait list

app.get('/waitlist', function(req.res){
  res.json(waitlist);
})

// Search for Specific Character (or all characters) - provides JSON
app.get("/api/:characters?", function(req, res) {
  var chosen = req.params.characters;

  if (chosen) {
    console.log(chosen);

    for (var i = 0; i < characters.length; i++) {
      if (chosen === characters[i].routeName) {
        return res.json(characters[i]);
      }
    }
    return res.json(false);
  }
  return res.json(characters);
});

// Create New Characters - takes in JSON input
app.post("/api/new", function(req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body-parser middleware
  var newcharacter = req.body;

  console.log(newcharacter);

  // We then add the json the user sent to the character array
  characters.push(newcharacter);

  // We then display the JSON to the users
  res.json(newcharacter);
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
