const mongoose = require('mongoose');

// Review Schema
const reviewSchema = new mongoose.Schema({
  reviewText: {
    type: String,
    required: true,
    minlength: 10,
    maxlength: 500
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users', // Assuming you have a User model
    required: true
  },

  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Create a model from the schema
const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;