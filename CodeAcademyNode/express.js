
// Import express using require syntax and assign it to an express variable.

// Create an instance of an Express server and save it to a variable named app.

// Start the server listening on the port defined by the PORT variable. When the server has started, log a message to the console that the seÇrver is listening for requests.

// To actually start your server listening, run the command node app.js to run your server in Node. At this point, it won’t do much, but if you’ve completed the steps above, it will log your message to show that the server started successfully.

// When you want to check that you have written your starting server code correctly, use the ‘Check Work’ button.


// Import the express library here
const express = require('express');
// Instantiate the app here
const app = express();
const PORT = process.env.PORT || 4001;

// Invoke the app's `.listen()` method below:
app.listen(PORT, () => {
  console.log("dapper")
})

// ---------




