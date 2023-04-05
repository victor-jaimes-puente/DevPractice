import { createNewUser, signin } from './../clone/api-design-v4-course/src/handlers/user';
// Import the `express` module, which is used to create the server
import express from 'express';

// Import the `router` module, which contains the main logic for the API
import router from './router';

// Import the `morgan` module, which is used to log API requests
import morgan from 'morgan';

// Import the `protect` middleware from the `auth.js` file
import { protect } from './modules/auth';

// Create a new instance of the `express` app
const app = express();

// Use the `morgan` middleware to log all API requests to the console
app.use(morgan('dev'))

// Use the built-in `express.json()` middleware to parse incoming JSON data
app.use(express.json())

// Use the built-in `express.urlencoded()` middleware to parse incoming URL-encoded data
// and allow for nested objects in query strings
app.use(express.urlencoded({extended: true}))

// Define a route for the root URL that returns a simple message
app.get('/', (req, res, next) => {
   console.log('Route / ')
   res.json({message: 'Route / '})
   
});

// Use the `protect` middleware to authenticate requests to the `/api` URL
// and delegate handling to the `router` module
app.use('/api', protect, router)

app.post('/user', createNewUser)
app.post('/signin', signin)

app.use((err, req, res, next)=>{
   if(err.type == 'auth'){
    res.status(401).json({message: 'unauthorized'})
   }else if (err.type == 'input') {
    res.status(400).json({message: 'invalid input'})
   } else {
    res.status(500).json({message: 'oops thats on us'})
   }
})
// Export the `app` module to be used in other files
export default app;
