/**
 * Module dependencies.
 */
'use strict';
var express = require('express');
var router = express.Router();
var multer = require('multer');
var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');

//import NewPasswordContainer from '../modules/resetPassword/components/new-password-container';
//<GuestRoute exact path="/reset/:userId/:token" component={NewPasswordContainer} />;

var storage = multer.diskStorage({
		destination: (req, file, cb) => {
			cb(null, './public/images/');
		},
		filename: (req, file, cb) => {
			console.log(file);
			var filetype = '';
			if (file.mimetype === 'image/gif') {
				filetype = 'gif';
			}
			if (file.mimetype === 'image/png') {
				filetype = 'png';
			}
			if (file.mimetype === 'image/jpeg') {
				filetype = 'jpg';
			}
			cb(null, 'image-' + Date.now() + '.' + filetype);
		}
	});
var upload = multer({
		storage: storage
	});

/*File Upload*/
router.post('/upload', upload.single('FileField'), function (req, res, next) {
	//console.log(req);
	if (!req.body) {
		res.status(500);
		return next(err);
	}

	res.json({
		fileUrl: '/images/' + req.file.filename
	});
})

var Country = require('../controllers/country');
var State = require('../controllers/state');
var City = require('../controllers/city');
var Category = require('../controllers/category');
var Language = require('../controllers/language');
var Students = require('../controllers/users');
var Cmspage = require('../controllers/cmspage');
var Courses = require('../controllers/courses');
var Coursesubjects = require('../controllers/coursesubjects');
var Coursechapters = require('../controllers/coursechapters');
var Chapterfiles = require('../controllers/chapterfiles');
var Userbooks = require('../controllers/userbooks');
var Exams = require('../controllers/exams');
var Userexamquestions = require('../controllers/userexamquestions');

/*Masters list*/
router.post('/country/list', Country.countryList);
router.post('/state/list', State.stateList);
router.post('/city/list', City.cityList);
router.post('/category/list', Category.categoryList);
router.post('/language/list', Language.languageList);

/*On Boarding*/
router.post('/users/user-registration', Students.add);
router.post('/users/user-login-password', Students.login);
router.post('/users/user-update-profile', Students.updateProfile);
router.post('/users/user-update-profile-picture', Students.updateProfilePicture);
router.post('/users/user-update-settings', Students.updateSetttings);
router.post('/users/user-check-duplication', Students.checkDuplicate);
router.post('/users/user-forgot-password', Students.forgotPassword);
router.post('/users/change-password', Students.changePassword);
router.post('/users/activate-account', Students.verifyAccount);
router.post('/users/verify-forgot-requestcode', Students.verifyForgetRequest);
router.post('/users/reset-password', Students.resetPassword);

/*cms page*/
router.post('/cmspage/get-cmspage', Cmspage.getCmsPage);

/*Courses*/
router.post('/courses/get-courses', Courses.getCourses);
router.post('/coursesubjects/get-courses-subjects', Coursesubjects.getCoursesubjectlist);
router.post('/coursechapters/get-courses-subjects-chapters', Coursechapters.getCourseChapeterlist);
router.post('/chapterfiles/get-courses-subjects-chapters-files', Chapterfiles.getChapeterfileList);
router.post('/usercourses/buy-course', Userbooks.buyBook);
router.post('/usercourses/my-course', Userbooks.myBoooks);

/*Exams & Tests*/
router.post('/exams/create-my-exam', Exams.getExams);
router.post('/userexamquestions/post-answers', Userexamquestions.postAnswers);
router.post('/exams/get-result-comparision', Exams.getIndividualGroup);
router.post('/exams/get-result-avgtime-accuracry', Exams.getTimenAccuracy);
router.post('/exams/get-result-strong-weak', Exams.getStrongnWeak);
router.post('/exams/get-result-summary', Exams.getResultSummary);
router.post('/exams/get-result-list', Exams.getResultList);
router.post('/exams/get-practice-level-exams', Exams.getPracticeLevelExams);
router.post('/exams/get-practice-level-exams-questions', Exams.getPracticeLevelExamsQuestions);


module.exports = router;
