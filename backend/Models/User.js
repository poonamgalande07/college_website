const mongoose = require('mongoose');

// Define the user schema
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Enter Name"]
  },
  surname: {
    type: String,
    required: [true, "Enter Surname"]
  },
  email: {
    type: String,
    required: [true, "Enter Email"]
  },
  password: {
    type: String,
    required: [true, "Enter Password"]
  },
  details: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",  // Assuming "User" is the correct reference model
      required: false
    }
  ],
  createdAt: {
    type: Date,
    default: Date.now
  },
  ratings: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Rating"  // Correct reference to the "Rating" model
  }],
  reviews: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Review"  // Correct reference to the "Review" model
  }]
});

const User = mongoose.model("User", userSchema);  // Ensure consistent naming here

module.exports = User;
