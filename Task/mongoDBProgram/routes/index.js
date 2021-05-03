var express = require('express');
var router = express.Router();
const auth = require('../middlewares/auth');
var Users = require('../controllers/users');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

//Users API
router.post('/users/add', Users.add);
router.post('/users/login', Users.login);
router.post('/users/list', auth.protect ,Users.list);
router.post('/users/update', auth.protect ,Users.update);
router.post('/users/search', auth.protect ,Users.search);

module.exports = router;
