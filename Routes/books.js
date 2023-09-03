import express from 'express'
const router = express.Router()

import { getAllBooks, createBook, getSingleBook, updateBook, deleteBook } from '../Controller/books.js'

router.route('/').get(getAllBooks).post(createBook)
router.route('/:id').get(getSingleBook).put(updateBook).delete(deleteBook)

export default router