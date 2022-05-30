const { Schema, model } = require('mongoose')

const Author = new Schema({
    prenom: String,
    nom: String,
    age: Number
})

const AuthorModel = model('Author', Author)

module.exports = AuthorModel