const express = require('express');
const router = express.Router();
const driverController = require('../controllers/driver');

router.post('/registerUser', driverController.registerUser);


module.exports = router;
