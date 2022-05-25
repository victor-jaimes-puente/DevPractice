
// Import express using require syntax and assign it to an express variable.

// Create an instance of an Express server and save it to a variable named app.

// Start the server listening on the port defined by the PORT variable. When the server has started, log a message to the console that the seÇrver is listening for requests.

// To actually start your server listening, run the command node app.js to run your server in Node. At this point, it won’t do much, but if you’ve completed the steps above, it will log your message to show that the server started successfully.

// When you want to check that you have written your starting server code correctly, use the ‘Check Work’ button.

const express = require('express');
const app = express();

const PORT = process.env.PORT || 4001;
// Use static server to serve the Express Yourself Website
app.use(express.static('public'));

// Open a call to `app.get()` below:
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
app.get('/expressions', (req, res, next) => {
  console.log(req)
})

// ---

// Send the expressions array from your app.get handler. Now that you have a complete route, you can test it out by reloading the browser window and clicking the ‘Refresh Expressions’ button on the machine.

// If you make changes to app.js, you will need to restart your server to see the changes in effect. You can do this by pressing Ctrl + C in the terminal window to stop the old server, and you can start it again with node app.js.

const express = require("express");
const app = express();
const { seedElements } = require("./utils");

// Serves Express Yourself website
app.use(express.static("public"));

const PORT = process.env.PORT || 4001;
// Use static server to serve the Express Yourself Website
app.use(express.static("public"));

const expressions = [];
seedElements(expressions, "expressions");

// Get all expressions
app.get("/expressions", (req, res, next) => {
  console.log(expressions);
  res.send(expressions)
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

// ---
// Create a GET /expressions/:id get route that you will use to send back a single expression. You can use req.params object and the pre-written helper function getElementById(id, array) to find the correct expression before sending it back.

// For instance, to find ID 560 from expressions, you would call getElementById(560, expressions);. This function returns the element object if it exists and undefined if it does not.

// Don’t forget to restart your server when you make changes to app.js. To test the Express Yourself machine, use the box in the upper-left corner to send a GET request for a specified ID.

const express = require('express');
const app = express();

// Serves Express Yourself website
app.use(express.static('public'));

const { getElementById, seedElements } = require('./utils');

const expressions = [];
seedElements(expressions, 'expressions');

const PORT = process.env.PORT || 4001;
// Use static server to serve the Express Yourself Website
app.use(express.static('public'));

app.get('/expressions', (req, res, next) => {
  res.send(expressions);
});

// Add a new call to app.get('/expressions/:id') here

app.get('/expressions/:id',(req,res,next) => {
  console.log(req.params.id);
  const id = req.params.id -1
  res.send(expressions[id])
})
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

// localhost:4001/expressions/3
// output : {"id":3,"emoji":"😴","name":"sleepy"}

// ---

// Let’s make sure that our GET /expressions/:id route handles invalid requests properly, for instance if we request an expression ID that does not exist.

// Complete your route so that it sends back the correct expression object if it exists and sends back a 404 response if it does not.

const express = require("express");
const app = express();

// Serves Express Yourself website
app.use(express.static("public"));

const { getElementById, seedElements } = require("./utils");

const expressions = [];
seedElements(expressions, "expressions");

const PORT = process.env.PORT || 4001;
// Use static server to serve the Express Yourself Website
app.use(express.static("public"));

app.get("/expressions", (req, res, next) => {
  res.send(expressions);
});

app.get("/expressions/:id", (req, res, next) => {
  const foundExpression = getElementById(req.params.id, expressions);
  if (foundExpression) {
    res.status(200).send(
      foundExpression
      );
  } else {
    res.status(404).send(
      "Monster Not Found"
    )
  }
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});


//






