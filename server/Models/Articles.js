const mongoose = require("mongoose");

const articleSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  publicationDate: {
    type: Date,
    default: Date.now,
  },
  content: {
    type: String,
    required: true,
  },
  tags: {
    type: [String], 
    default: "",
  },
});

const Article = mongoose.model("articles", articleSchema);

module.exports = Article;