const AuthorModel = require('../models/Author')

module.exports = {
    createAuthor: (req, res) => {
        const { prenom, nom, age } = req.body
        const author = new AuthorModel({ prenom, nom, age })

        author.save( (err, author) => {
            if (err) {
                res.status(500).json({
                    message: err
                })
            }
            else {
                res.status(201).json({
                    status: 201,
                    message: "succes",
                    author
                })
            }
        })
    },
    deleteAuthor: (req, res) => {
        AuthorModel.findByIdAndDelete({_id}, (err, author) => {
            if (!author) {
                return res.status(404).json({message: "author not found"})
            }
            res.json(author)
        })
    },
    updateAuthor: (req, res) => {
        const {prenom, nom, age} = req.body
        AuthorModel.findOneAndUpdate({_id}, {prenom, nom, age}, (err, author) => {
            if (err) {
                res.status(500).json({
                    message: err
                })
            }
            else {
                if (!author) {res.status(404).json({"message": "author not found"})}
                res.status(200).json({
                    "message": "success"
                })
            }
        })
    },
    getAuthor: (req, res) => {
        AuthorModel.findOne({_id}, (err, author) => {
            if (err) {
                res.status(500).json({
                    message: err
                })
            }
            else {
                if (!author) {res.status(404).json({"message": "author not found"})}
                res.status(200).json({
                    author
                })
            }
        })
    }
}