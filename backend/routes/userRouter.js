

// const express = require('express');
// const router = express.Router();
// const Auth_Controller = require('../Controller/AuthController.js')
// const auth = require('../middlewares/Auth.js')

// router.post('/signup', Auth_Controller.signup); 
// router.post('/login',Auth_Controller.login);  
// router.get('/usersprofile/:id',auth, Auth_Controller.getUserProfile); 
// router.get('/getallusers', Auth_Controller.getAllUsers);      
// router.put('/updateprofile/:id',auth,Auth_Controller.updateProfile); 
// router.delete('/delete/:id',auth, Auth_Controller.deleteUser); 

// module.exports = router;




const express = require('express');
const router = express.Router();
const authenticate = require('../middlewares/Auth');


const UserController = require('../Controller/UserController');

router.get('/profile', authenticate, UserController.getUserProfile);
router.get('/all-users',  UserController.getAllUser);


module.exports = router;