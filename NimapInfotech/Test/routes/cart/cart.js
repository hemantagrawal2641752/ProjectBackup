const express = require('express');
const router = express.Router();
const cartController = require('../../controllers/cart/cart');
const auth = require('../../middlewares/auth');

router.post('/CheckProductQuantity', auth.protect, cartController.CheckProductQuantity);
router.post('/AddToCartUsers', auth.protect, cartController.AddToCartUsers);

module.exports = router;
