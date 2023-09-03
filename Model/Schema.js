import mongoose from "mongoose";

const bookSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },
        author: {
            type: String,
            required: true
        },
        PublishYear: {
            type: Number,
            required: true
        },
    },   { timestamps:true }
)

const Book = mongoose.model('Books', bookSchema)

export default Book