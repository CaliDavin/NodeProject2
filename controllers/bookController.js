const BookModel = require('../models/Book')

module.exports = {
    createBook: (req, res) => {
        const { title, description, publication_date, author, publisher } = req.body
        const book = new BookModel({ title, description, publication_date, author, publisher })

        book.save( (err, book) => {
            if (err) {
                res.status(500).json({
                    message: err
                })
            }
            else {
                res.status(201).json({
                    status: 201,
                    message: "succes",
                    book
                })
            }
        })
    },
    deleteBook: (req, res) => {
        BookModel.findByIdAndDelete({_id}, (err, book) => {
            if (!book) {
                return res.status(404).json({message: "book not found"})
            }
            res.json(book)
        })
    },
    updateBook: (req, res) => {
        const {title, description, publication_date, author, publisher} = req.body
        BookModel.findOneAndUpdate({_id}, {title, description, publication_date, author, publisher}, (err, book) => {
            if (err) {
                res.status(500).json({
                    message: err
                })
            }
            else {
                if (!book) {res.status(404).json({"message": "book not found"})}
                res.status(200).json({
                    "message": "success"
                })
            }
        })
    },
    getBook: (req, res) => {
        BookModel.findOne({_id}, (err, book) => {
            if (err) {
                res.status(500).json({
                    message: err
                })
            }
            else {
                if (!book) {res.status(404).json({"message": "book not found"})}
                res.status(200).json({
                    book
                })
            }
        })
    }
}