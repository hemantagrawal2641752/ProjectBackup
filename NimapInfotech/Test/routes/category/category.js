const express = require('express');
const router = express.Router();
const categoryController = require('../../controllers/category/category');
const auth = require('../../middlewares/auth');

router.post('/category1', auth.protect, categoryController.category1);
router.post('/category2', auth.protect, categoryController.category2);
router.post('/category3', auth.protect, categoryController.category3);

module.exports = router;
