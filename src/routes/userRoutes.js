const express = require('express');
const router = express.Router();


//controllers
const userController = require('../controllers/user-controller');

//loguear usuario
router.get('/', userController.showUsersList);
//loguear usuario
router.post('/login', userController.login);
//logout
router.get('/logout', userController.logout);


module.exports = router;