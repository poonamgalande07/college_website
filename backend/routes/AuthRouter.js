const express = require('express');
const router = express.Router();
const Auth_Controller = require('../Controller/AuthController');
const authenticate = require('../middlewares/Auth');




router.post('/signup', Auth_Controller.register);
router.post('/login', Auth_Controller.login);

router.post('/logout',authenticate, Auth_Controller.Logout_User);



module.exports = router;