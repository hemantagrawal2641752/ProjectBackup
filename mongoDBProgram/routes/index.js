var express = require('express');
var router = express.Router();


var Address = require('../controllers/address');
var Category = require('../controllers/category');
var Users = require('../controllers/users');


/* GET home page. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});



// Address API
router.post('/address/list', Address.addressList);
router.post('/address/add', Address.add);

//Category API
router.post('/category/list', Category.categoryList);
router.post('/category/add', Category.add);

//Category API
router.post('/users/list', Category.categoryList);
router.post('/users/add', Category.add);

module.exports = router;
