const express = require('express');
const router = express.Router();
const userController = require('../../controllers/users/users');
const auth = require('../../middlewares/auth');

router.post('/registerUser', userController.registerUser);
router.post('/userLogin', userController.userLogin);
router.post('/getAllusersAdmin', auth.protect, userController.getAllusersAdmin);

module.exports = router;
