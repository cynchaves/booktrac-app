const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: {type: String, required: true,},
  author: {type: String, required: true,},
  pages: {type: Number,},
  status: { 
    type: String, 
    enum: ['reading', 'finished'],
  },
});

const userSchema = new mongoose.Schema({
  username: {type: String, required: true,},
  password: {type: String, required: true,},
  books: [bookSchema],
});

const User = mongoose.model('User', userSchema);

module.exports = User;
