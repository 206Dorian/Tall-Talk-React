const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
    unique: true,
  },

});

const Question = mongoose.model('Question', questionSchema);

module.exports = Question;
