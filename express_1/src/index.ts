// Import the `app` module from the `server.js` file
import app from './server'
import ServerlessHttp from 'serverless-http'
// Import the `dotenv` module to load environment variables
import * as dotenv from 'dotenv'
import config from './config'
// Load environment variables from the `.env` file
dotenv.config()

// Set the port number to listen on
let port = config.port

// Start the server and listen on the specified port
// app.listen(port, ()=>{
//     console.log(`🦉: started server on port:${port}:🐀`)
// })

//lamda

module.exports.handler = ServerlessHttp(app)