const { Schema, model } = require('mongoose')

const Book = new Schema({
    title: String,
    description: String,
    publication_date: Date,
    author: {
        type: Schema.Types.ObjectId,
        ref: 'Author',
    },
    publisher: {
        type: Schema.Types.ObjectId,
        ref: 'Publisher',
    }
})

const BookModel = model('Book', Book)

module.exports = BookModel