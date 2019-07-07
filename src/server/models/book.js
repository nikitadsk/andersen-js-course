const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema(
  {
    name: String,
    author: String,
  },
  { versionKey: false }
);

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;
