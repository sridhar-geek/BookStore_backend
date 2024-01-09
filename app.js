import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()
import 'express-async-errors'
import cors from 'cors'

const app = express()
// Imports from another files
import Routes from './Routes/books.js'

app.get('/', (req, res) => {
    res.send('<h1>Welcome to BookStore</h1>')
})

/* Middlewares */
app.use( express.json() );
// this will allow every request to come in and every method
app.use(cors())
app.use('/api/books', Routes)

const PORT = process.env.PORT || 5000;

const start = async()=> {
 try {
    await mongoose.connect(process.env.MONGO_URL)
    console.log('Connected to DataBase')
    app.listen(PORT, ()=> console.log(`Server is started on Port ${PORT}`))
 } catch (error) {
    console.log(error.message)
 }
}

start()
