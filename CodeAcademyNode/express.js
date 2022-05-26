
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
// For now, open a PUT /expressions/:id route with an empty (req, res, next) callback function. We will fully implement its functionality in the next exercise.


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

app.get('/expressions/:id', (req, res, next) => {
  const foundExpression = getElementById(req.params.id, expressions);
  if (foundExpression) {
    res.send(foundExpression);
  } else {
    res.status(404).send();
  }
});
app.put('/expressions/:id', (req, res, next) => {
  
});

// Add your PUT route handler below:


app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});


//
// Use req.query to update the proper element in the expressions array.

// We’ve imported a helper function from /utils.js to help with this task.

// You can use the updateElement() helper function in your PUT /expressions/:id route.

// It takes three arguments:

//     id (the ID number of the element)
//     queryArguments (the new, updated expression object from req.query)
//     elementList (the array which contains the element to update)

// updateElement() updates that specific element in the elementList array (you’ll pass in the expressions array), and then returns the updated element.

// Be sure to check that an expression with the id you provide exists in the expressions array (getIndexById() can help)!

// To test your functionality with the Express Yourself machine, make sure your server is run

// ning, get all expressions, and then use the UPDATE tab to select an individual expression, select updates, and send the PUT request.
// Checkpoint 2 Passed

const express = require('express');
const app = express();

// Serves Express Yourself website
app.use(express.static('public'));

const { getElementById, getIndexById, updateElement,
  seedElements } = require('./utils');

const expressions = [];
seedElements(expressions, 'expressions');

const PORT = process.env.PORT || 4001;
// Use static server to serve the Express Yourself Website
app.use(express.static('public'));

app.get('/expressions', (req, res, next) => {
  res.send(expressions);
});

app.get('/expressions/:id', (req, res, next) => {
  const foundExpression = getElementById(req.params.id, expressions);
  if (foundExpression) {
    res.send(foundExpression);
  } else {
    res.status(404).send();
  }
});

app.put('/expressions/:id', (req, res, next) => {
  const expressionIndex = getIndexById(req.params.id, expressions);
  if (expressionIndex !== -1) {
    updateElement(req.params.id, req.query, expressions);
    res.send(expressions[expressionIndex]);
  } else {
    res.status(404).send();
  }
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

//

// Creating An Expression

// POST is the HTTP method verb used for creating new resources. Because POST routes create new data, their paths do not end with a route parameter, but instead end with the type of resource to be created.

// For example, to create a new monster, a client would make a POST request to /monsters. The client does not know the id of the monster until it is created and sent back by the server, therefore POST /monsters/:id doesn’t make sense because a client couldn’t know the unique id of a monster before it exists.

// Express uses .post() as its method for POST requests. POST requests can use many ways of sending data to create new resources, including query strings.

// The HTTP status code for a newly-created resource is 201 Created.
// Instructions
// 1.

// Create a POST /expressions route. It should send create and add a new expression to the expressions array if it is a valid new expression (meaning it has an emoji and name key). It should send back the new element with a 201 status code if it is valid, and it should send a 400 status code if the object is not valid.

// You can use the createElement(elementType, objectToCreate) helper function to create a valid expression. The first argument is the type of element, so it should be 'expressions' in this case. The second argument should be the query object with an emoji and a name property. This function will return false if the objectToCreate does not contain all necessary key-value pairs, and it will return the newly-created element if object to create is valid. It does not add the created element to any arrays, you will need to do so yourself.

// Don’t forget to restart your server and test as you implement the functionality. To test your route, use the POST tab in the upper left corner. Select a name and emoji and send the request to see if your route works as intended.
// Checkpoint 2 Passed

// You can use the .push() method of the expressions array to add a new element after it has been created, for example:

// const newElement = createElement('emoji', {name: 'example', emoji: ':)'});
// if (newElement) {
//   elements.push(newElement);
// }

const express = require('express');
const app = express();

// Serves Express Yourself website
app.use(express.static('public'));

const { getElementById, getIndexById, updateElement,
        seedElements, createElement } = require('./utils');

const expressions = [];
seedElements(expressions, 'expressions');

const PORT = process.env.PORT || 4001;
// Use static server to serve the Express Yourself Website
app.use(express.static('public'));

app.get('/expressions', (req, res, next) => {
  res.send(expressions);
});

app.get('/expressions/:id', (req, res, next) => {
  const foundExpression = getElementById(req.params.id, expressions);
  if (foundExpression) {
    res.send(foundExpression);
  } else {
    res.status(404).send();
  }
});

app.put('/expressions/:id', (req, res, next) => {
  const expressionIndex = getIndexById(req.params.id, expressions);
  if (expressionIndex !== -1) {
    updateElement(req.params.id, req.query, expressions);
    res.send(expressions[expressionIndex]);
  } else {
    res.status(404).send();
  }
});

app.post('/expressions', (req, res, next) => {
  const receivedExpression = createElement('expressions', req.query);
  if (receivedExpression) {
    expressions.push(receivedExpression);
    res.status(201).send(receivedExpression);
  } else {
    res.status(400).send();
  }
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

/*
1.

Create a DELETE /expressions/:id route. It should send back a 404 response for a request with an invalid id, and it should delete the proper element from the expressions array and send a 204 status with a valid id.

To test your functionality, use the DELETE tab in the upper left. Select the ID to delete and send the request.
Checkpoint 2 Passed

You can use getIndexById to find the index of the element to delete. getIndexById will return -1 for a non-existent ID, and the proper index if it exists. Then you can use the splice method to remove the element.
*/

const express = require('express');
const app = express();

// Serves Express Yourself website
app.use(express.static('public'));

const { getElementById, getIndexById, updateElement,
        seedElements, createElement } = require('./utils');

const expressions = [];
seedElements(expressions, 'expressions');

const PORT = process.env.PORT || 4001;
// Use static server to serve the Express Yourself Website
app.use(express.static('public'));

app.get('/expressions', (req, res, next) => {
  res.send(expressions);
});

app.get('/expressions/:id', (req, res, next) => {
  const foundExpression = getElementById(req.params.id, expressions);
  if (foundExpression) {
    res.send(foundExpression);
  } else {
    res.status(404).send();
  }
});

app.put('/expressions/:id', (req, res, next) => {
  const expressionIndex = getIndexById(req.params.id, expressions);
  if (expressionIndex !== -1) {
    updateElement(req.params.id, req.query, expressions);
    res.send(expressions[expressionIndex]);
  } else {
    res.status(404).send();
  }
});

app.post('/expressions', (req, res, next) => {
  const receivedExpression = createElement('expressions', req.query);
  if (receivedExpression) {
    expressions.push(receivedExpression);
    res.status(201).send(receivedExpression);
  } else {
    res.status(400).send();
  }
});

app.delete('/expressions/:id', (req, res, next) => {
  const expressionIndex = getIndexById(req.params.id, expressions);
  if (expressionIndex !== -1) {
    expressions.splice(expressionIndex, 1);
    res.status(204).send();
  } else {
    res.status(404).send();
  }
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`); 
});

/*
In your app.js file, Create a GET /animals route to return an array of all animals.
2.

Create a GET /animals/:id route to respond with a single animal.
3.

Create a PUT /animals/:id route to update an animal in animals and send back the updated animal.
4.

Create a POST /animals route to add new animals to the animals and respond with the new animal.
5.

Create a DELETE /animals/:id route to delete animals by ID.

*/

const express = require('express');
const app = express();

// Serves Express Yourself website
app.use(express.static('public'));

const { getElementById, getIndexById, updateElement,
        seedElements, createElement } = require('./utils');
const { reverse } = require('dns');

const expressions = [];
seedElements(expressions, 'expressions');
const animals = [];
seedElements(animals, 'animals');

const PORT = process.env.PORT || 4001;
// Use static server to serve the Express Yourself Website
app.use(express.static('public'));

app.get('/expressions', (req, res, next) => {
  res.send(expressions);
});

app.get('/expressions/:id', (req, res, next) => {
  const foundExpression = getElementById(req.params.id, expressions);
  if (foundExpression) {
    res.send(foundExpression);
  } else {
    res.status(404).send();
  }
});

app.put('/expressions/:id', (req, res, next) => {
  const expressionIndex = getIndexById(req.params.id, expressions);
  if (expressionIndex !== -1) {
    updateElement(req.params.id, req.query, expressions);
    res.send(expressions[expressionIndex]);
  } else {
    res.status(404).send();
  }
});

app.post('/expressions', (req, res, next) => {
  const receivedExpression = createElement('expressions', req.query);
  if (receivedExpression) {
    expressions.push(receivedExpression);
    res.status(201).send(receivedExpression);
  } else {
    res.status(400).send();
  }
});

app.delete('/expressions/:id', (req, res, next) => {
  const expressionIndex = getIndexById(req.params.id, expressions);
  if (expressionIndex !== -1) {
    expressions.splice(expressionIndex, 1);
    res.status(204).send();
  } else {
    res.status(404).send();
  }
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`); 
});
// Animals 

app.get('/animals', (req, res, next) => {
  res.send(animals)
});
//Read
app.get('expressions/:id', (req, res, next ) => {
  const foundAnimal = getElementById(req.params.id, animals);
  if (foundAnimal) {
    res.send(foundAnimal);
  } else {
    res.status(404).send();
  }
});
//GetbyID
app.put('/animals/:id', (req, res, next) => {
  const animalIndex = getIndexById(req.params.id, animals)
  if ( animalIndex !== -1){
    updateElement(req.params.id, req.query, animals)
    res.send(animals[animalIndex])
  } else {
    res.status(404).send()
  }
})
//Create
app.post('/animals', (req, res, next) => {
  const receivedAnimal = createElement('animals', req.query)
  if (receivedAnimal) {
    animals.push(receivedAnimal)
    res.status(201).send(receivedAnimal)
  } else {
    res.status(400).send()
  }
})
//Delete 

app.delete('/animals/:id', (req, res, next) => {
  const animalIndex = getIndexById(req.params.id, animals)
  if ( animalIndex !== -1) {
    animals.splice(animalIndex, 1)
    res.status(204).send()
  } else {
    res.status(404).send();
  }
})

