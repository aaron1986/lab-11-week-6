const mongoose = require("mongoose");

const { Schema } = mongoose;

const bookSchema = new Schema({
  title: String,
  year: Number,
  author: String,
  ISBN: Number,
  imgUrl: String,
  summary: String,
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;