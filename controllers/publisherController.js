const PublisherModel = require('../models/Publisher')

module.exports = {
    createPublisher: (req, res) => {
        const { name, creation_date } = req.body
        const publisher = new PublisherModel({ name, creation_date })

        publisher.save( (err, publisher) => {
            if (err) {
                res.status(500).json({
                    message: err
                })
            }
            else {
                res.status(201).json({
                    status: 201,
                    message: "succes",
                    publisher
                })
            }
        })
    },
    deletePublisher: (req, res) => {
        PublisherModel.findByIdAndDelete({_id}, (err, publisher) => {
            if (!publisher) {
                return res.status(404).json({message: "publisher not found"})
            }
            res.json(publisher)
        })
    },
    updatePublisher: (req, res) => {
        const {name, creation_date} = req.body
        PublisherModel.findOneAndUpdate({_id}, {name, creation_date}, (err, publisher) => {
            if (err) {
                res.status(500).json({
                    message: err
                })
            }
            else {
                if (!publisher) {res.status(404).json({"message": "publisher not found"})}
                res.status(200).json({
                    "message": "success"
                })
            }
        })
    },
    getPublisher: (req, res) => {
        PublisherModel.findOne({_id}, (err, publisher) => {
            if (err) {
                res.status(500).json({
                    message: err
                })
            }
            else {
                if (!publisher) {res.status(404).json({"message": "publisher not found"})}
                res.status(200).json({
                    publisher
                })
            }
        })
    }
}