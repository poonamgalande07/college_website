
const Rating = require('../Models/Ratings');
const User = require('../Models/User');

// Service to create a rating
const createRating = async (userId, ratingText) => {
  const user = await User.findById(userId);

  if (!user) {
    throw new Error('User not found');
  }

  // Create new rating
  const rating = new Rating({
    ratingText,
    user: userId
  });

  await rating.save();

  // Push rating ID into user's ratings array
  user.ratings.push(rating._id);
  await user.save();

  return rating;
}

// Service to update a rating
const updateRating = async (ratingId, ratingText) => {
  const rating = await Rating.findById(ratingId);

  if (!rating) {
    throw new Error('Rating not found');
  }

  rating.ratingText = ratingText;
  await rating.save();

  return rating;
}

// Service to delete a rating
const deleteRating = async (ratingId) => {
  const rating = await Rating.findById(ratingId);

  if (!rating) {
    throw new Error('Rating not found');
  }

  // Remove rating ID from user's ratings array
  await User.findByIdAndUpdate(rating.user, { $pull: { ratings: rating._id } });

  await rating.deleteOne();
  return rating;
}

// Service to get all ratings for a user
const getRatingByUser = async (userId) => {
  const ratings = await Rating.find({ user: userId })
    .populate('user', 'name email'); // Populating user info

  return ratings;
}

// Get all ratings
const getAll = async () => {
  const ratings = await Rating.find();
  return ratings;
}

module.exports = { createRating, updateRating, deleteRating, getRatingByUser, getAll };
