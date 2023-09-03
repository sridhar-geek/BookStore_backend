import { StatusCodes } from 'http-status-codes'
import Book from '../Model/Schema.js'

export const createBook = async(req, res)=> {
    const book = await Book.create(req.body)
    res.status(StatusCodes.CREATED).json( book )
}

export const getAllBooks = async( req, res )=> {
    const books = await Book.find()
    res.status(StatusCodes.OK).json( {Total:books.length, data: books } )
}

export const getSingleBook = async( req, res )=> {
    const {id} = req.params
    const book = await Book.findById( id )
    res.status(StatusCodes.OK).json( book )
}

export const updateBook = async( req, res )=> {
    const { id } = req.params
    const updated = await Book.findByIdAndUpdate( id, req.body)
    if(!updated)
        return res.status( StatusCodes.NOT_FOUND).send('Book not found')

    res.status(StatusCodes.OK).json( updated )
}

export const deleteBook = async( req, res )=> {
    const { id } = req.params
    const deleted = await Book.findByIdAndDelete( id )
    if(!deleted)
        return res.status( StatusCodes.NOT_FOUND).send('Book not found')

    res.status(StatusCodes.OK).json( deleted )
}