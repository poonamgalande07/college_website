const Review = require('../Models/Review');
const User = require('../Models/User');

// Service to create a review
const createReview = async (userId, reviewText) => {
  const user = await User.findById(userId);

  if (!user) {
    throw new Error('User not found');
  }

  // Create new review
  const review = new Review({
    reviewText,
    user: userId
  });

  await review.save();

  // Push review ID into user's reviews array
  user.reviews.push(review._id);
  await user.save();

  return review;
}

// Service to update a review
const updateReview = async (reviewId, reviewText) => {
  const review = await Review.findById(reviewId);

  if (!review) {
    throw new Error('Review not found');
  }

  review.reviewText = reviewText;
  await review.save();

  return review;
}

// Service to delete a review
const deleteReview = async (reviewId) => {
  const review = await Review.findById(reviewId);

  if (!review) {
    throw new Error('Review not found');
  }

  // Remove review ID from user's reviews array
  await User.findByIdAndUpdate(review.user, { $pull: { reviews: review._id } });

  await review.deleteOne();
  return review;
}

// Service to get all reviews for a user
const getReviewsByUser = async (userId) => {
  const reviews = await Review.find({ user: userId })
    .populate('user', 'name email'); // Populating user info

  return reviews;
};

module.exports = { createReview, getReviewsByUser, deleteReview, updateReview };

