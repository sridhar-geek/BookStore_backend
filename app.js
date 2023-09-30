import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()
import 'express-async-errors'
import cors from 'cors'

import Routes from './Routes/books.js'

const app = express()
app.use( express.json() );
// this will allow every request to come in and every method
app.use(cors())
/* we can restrict requests and methods which are came to the server
    origin : give access to only specified origins
    methods: requested url can perform specified functions only
    headers : I don't about this
*/
// app.use( cors( 
//     {
//         origin: '',
//         methods: [ GET, POST, UPDATE, DELETE ],
//         allowedHeaders: ['Content-Type']
//     }
//     ))

app.get('/', (req, res) => {
    res.send('Welcome to BookStore')
})
    /* Middleware */
app.use( '/books', Routes)

const PORT = process.env.PORT || 5000;

const start = async()=> {
 try {
    await mongoose.connect(process.env.MONGO_URL)
    app.listen(PORT, ()=> console.log(`Server is started on Port ${PORT}`))
 } catch (error) {
    console.log(error.message)
 }
}

start()
