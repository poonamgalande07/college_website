const Rating_Service = require('../Services/Rating_Service');

// Controller to create a review
const createRating = async (req, res) => {
  try {
    const { userId , ratingText } = req.body;

    // Validate input
    if (!userId || !ratingText) {
      return res.status(400).json({ message: 'User ID and Rating Text are required.' });
    }

    const newRating = await Rating_Service.createRating(userId, ratingText);
    res.status(201).json({ message: 'Rating created successfully', rating: newRating });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};



// Controller to update a review
const updateRating = async (req, res) => {
  try {
    const { ratingId ,ratingText} = req.body;

    // Validate input
    if (!ratingId || !ratingText) {
      return res.status(400).json({ message: 'Rating ID and Rating Text are required.' });
    }

    const updatedRating = await Rating_Service.updateRating(ratingId, ratingText);
    res.status(200).json({ message: 'Rating updated successfully', rating: updatedRating });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

// Controller to delete a review
const deleteRating = async (req, res) => {
  try {
    const { ratingId } = req.params;

    // Validate input
    if (!ratingId) {
      return res.status(400).json({ message: 'Rating ID is required.' });
    }

    const deletedRating = await Rating_Service.deleteRating(ratingId);
    res.status(200).json({ message: 'Review deleted successfully', rating: deletedRating });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

// Controller to get all reviews by a user
const getRatingByUser = async (req, res) => {
  try {
    const { userId } = req.params;

    // Validate input
    if (!userId) {
      return res.status(400).json({ message: 'User ID is required.' });
    }

    const ratings = await Rating_Service.getRatingByUser(userId);
    res.status(200).json({ ratings });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};


const getAll = async (req, res) => {
  try {
    const ratings = await Rating_Service.getAll();
    return res.status(200).send({ message: "Success", ratings }); // Corrected status and response
  } catch (error) {
    return res.status(400).send({ message: "Failed", error: error.message }); // Corrected error handling
  }
};

module.exports = {
   createRating,updateRating,deleteRating,getRatingByUser,getAll
};
