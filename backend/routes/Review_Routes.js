const express = require('express');
const router = express.Router();
const Review_Controller = require('../Controller/Review_Controllers');

router.post('/add', Review_Controller.createReview);
router.put('/update', Review_Controller.updateReview);
router.delete('/delete/:reviewId', Review_Controller.deleteReview);
router.get('/user/:userId', Review_Controller.getReviewsByUser);

module.exports = router;