const express = require('express');
const router = express.Router();
const productController = require('../../controllers/product/product');
const auth = require('../../middlewares/auth');

router.post('/addProduct', auth.protect, productController.addProduct);
router.post('/productList', auth.protect, productController.productList);
router.post('/updateProduct', auth.protect, productController.updateProduct);

module.exports = router;
