const express = require('express');
const router = express.Router();
const driverController = require('../controllers/driver');
const bookController = require('../controllers/book');
const studentController = require('../controllers/student');

router.post('/driver/register', driverController.registerDriver);
router.post('/driver/sendLocation', driverController.sendLocation);
router.post('/driver/avaliable_cabs', driverController.avaliableCabs);

router.post('/book/addBook', bookController.addBook);
router.get('/book/getBooks', bookController.getBooks);
router.get('/book/getBook/:id', bookController.getBook);
router.post('/book/bookUpdate', bookController.bookUpdate);
router.post('/book/bookDelete', bookController.bookDelete);
//Student
router.post('/student/createStudent', studentController.createStudent);
router.get('/student/GetStudentsList', studentController.GetStudentsList);
router.post('/student/RemoveStudent', studentController.RemoveStudent);
router.get('/student/GetStudent/:id', studentController.GetStudent);
router.post('/student/studentUpdate', studentController.studentUpdate);

module.exports = router;
