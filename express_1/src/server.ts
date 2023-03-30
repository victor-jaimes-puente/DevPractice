
import express from 'express';
import router from './router';
import morgan from 'morgan';
const app = express();

//logs all api calls
app.use(morgan('dev'))
//allows us to use json 
app.use(express.json())
// allows for urls to be accessed as objects rather than just strings 
app.use(express.urlencoded({extended: true}))
// (custom)
// app.use((req:any, res:any, next)=>{
//  req.doggy = 'doggy'
//  res.status(401)
//  res.send('nope')
// })
app.get('/', (req, res) => {
 res.status(200)
 res.json({ message: '🦉🦉🦉🦉🦉' }) 
});

app.use('/api', router)

export default app;