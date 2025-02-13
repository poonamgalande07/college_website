import express from 'express';
import {createRegistration, getAllRegistrations,getRegistrationById, updateRegistration, deleteRegistration,} from '../controllers/registration_controller.js';

const router = express.Router();


router.post('/registrations', createRegistration);

router.get('/registrations', getAllRegistrations);

router.get('/registrations/:id', getRegistrationById);

router.put('/registrations/:id', updateRegistration);

router.delete('/registrations/:id', deleteRegistration);

export default router;
