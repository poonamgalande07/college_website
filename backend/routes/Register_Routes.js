const express = require('express');
const router = express.Router();

const Register_Controller = require('../Controller/Register_Controler');

// Create registration with userId in params
router.post('/registration/create/:userId', Register_Controller.Create_Registration);

// Get all registrations
router.get('/registrations', Register_Controller.Get_All_Registration);

// Get registration by ID
router.get('/registration/:id', Register_Controller.Find_Registration_By_Id);

// Update registration by ID
router.put('/:id', Register_Controller.Update_Registration);

// Delete registration by ID
router.delete('/:id', Register_Controller.Delete_Registration);

module.exports = router;
