const express = require('express')
const router = express.Router();
const Rating_Controller=require('../Controller/Rating_Controllers')

router.post('/add',Rating_Controller.createRating);
router.put('/update', Rating_Controller.updateRating);
router.delete('/delete/:reviewId', Rating_Controller.deleteRating);
router.get('/user/:userId', Rating_Controller.getRatingByUser);
router.get('/getall',Rating_Controller.getAll);

module.exports = router;
