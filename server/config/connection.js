const mongoose = require('mongoose');

// MongoDB connection URL
const dbURL = 'mongodb://localhost:27017/tall-talk-react';

// Connect to MongoDB
mongoose.connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

  module.exports = mongoose;
