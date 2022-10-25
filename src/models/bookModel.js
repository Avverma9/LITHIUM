const mongoose = require('mongoose');
const bookSchema = new mongoose.Schema( {
    bookName: String,
    authorName: String,
    price : Number,
    publicationYear : Number,
    bookLanguage : String 
}, {timestamps: true});


module.exports = mongoose.model('Book', bookSchema) //users