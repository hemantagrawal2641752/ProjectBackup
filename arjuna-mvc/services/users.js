'use strict';
var models = require('../models');
var sequelize = require('../common/mysql');
const Sequelize = require('sequelize');
var Students = models.Students;
var dateTime = require('node-datetime');
var bcrypt = require('bcryptjs');
// user registration
exports.addUser = (query, cb) => {
	var queryObj = {};
	var dt = dateTime.create();
	var formatted = dt.format('Y-m-d H:M:S');
	queryObj.userDeviceID = query.userDeviceID;
	queryObj.userDeviceType = query.userDeviceType;
	queryObj.userEmail = query.userEmail;
	queryObj.userFullName = query.userFullName;
	queryObj.userMobile = query.userMobile;
	queryObj.userPassword = query.userPassword;
	queryObj.userCountryCode = query.userCountryCode;
	queryObj.userProfilePicture = query.userProfilePicture;
	queryObj.userBirthDate = query.userBirthDate;
	queryObj.userCreatedDate = formatted;
	Students.build(queryObj).save().then((data) => {
		//console.log(data.dataValues);
		cb(data.dataValues);
	}).catch((err) => {
		cb(err);
	})
}
// login with password
exports.validateLogin = (query, cb) => {
	var offset = query.pageNum * query.pagesize;
	var limit = query.pagesize;

	Students.findOne({
		where: {
			userEmail: query.userEmail,
			userSignupOTPVerified: "Yes"
		} //, userSignupOTPVerified: "Yes"
	})
	.then((data) => {
		//console.log(data);
		cb(data);
	})
	.catch((err) => {
		cb(err);
	});

};
// update profile
exports.updateprofile = (query, cb) => {
	var queryObj = {};
	queryObj.userDeviceID = query.userDeviceID;
	queryObj.userDeviceType = query.userDeviceType;
	queryObj.userEmail = query.userEmail;
	queryObj.userFullName = query.userFullName;
	queryObj.userMobile = query.userMobile;
	queryObj.userPassword = query.userPassword;
	queryObj.userCountryCode = query.userCountryCode;
	queryObj.userProfilePicture = query.userProfilePicture;
	queryObj.userBirthDate = query.userBirthDate;
	queryObj.userGender = query.userGender;
	queryObj.userHobbies = query.userHobbies;
	queryObj.userInterest = query.userInterest;
	queryObj.userAddress = query.userAddress;
	Students.update(queryObj, {
		where: {
			userID: query.loginuserID
		}
	}).then((data) => {
		Students.findAll({
			where: {
				userID: query.loginuserID
			} //, userSignupOTPVerified: "Yes"
		})
		.then((data) => {
			//console.log(data);
			cb(data);
		})
		.catch((err) => {
			cb(err);
		});

	});

};
// update profile picture
exports.updateprofilePicture = (query, cb) => {
	var queryObj = {};
	queryObj.userProfilePicture = query.userProfilePicture;
	Students.update(queryObj, {
		where: {
			userID: query.loginuserID
		}
	}).then((data) => {
		Students.findAll({
			where: {
				userID: query.loginuserID
			} //, userSignupOTPVerified: "Yes"
		})
		.then((data) => {
			//console.log(data);
			cb(data);
		})
		.catch((err) => {
			cb(err);
		});

	});

};
// update user settings
exports.updatesettings = (query, cb) => {
	var queryObj = {};
	queryObj.userNewsNotification = query.userNewsNotification;
	queryObj.userCourseNotification = query.userCourseNotification;
	queryObj.userOfferNotification = query.userOfferNotification;
	queryObj.userExamNotification = query.userExamNotification;
	Students.update(queryObj, {
		where: {
			userID: query.loginuserID
		}
	}).then((data) => {
		Students.findAll({
			where: {
				userID: query.loginuserID
			} //, userSignupOTPVerified: "Yes"
		})
		.then((data) => {
			//console.log(data);
			cb(data);
		})
		.catch((err) => {
			cb(err);
		});

	});

};
// user check duplicate
exports.checkduplicate = (query, cb) => {

	Students.findAll({
		where: {
			$or: [{
					userEmail: {
						$eq: query.userEmail
					}
				}, {
					userMobile: {
						$eq: query.userMobile
					}
				}
			]
		}
	})
	.then((data) => {
		//console.log(data);
		cb(data);
	})
	.catch((err) => {
		cb(err);
	});

};
// user forgot password
exports.forgotpass = (query, cb) => {

	Students.findOne({
		where: {
			userEmail: query.userEmail
		}
	})
	.then((data) => {
		//console.log(data);
		cb(data);
	})
	.catch((err) => {
		cb(err);
	});

};
// user reset password
// user change password
exports.updatepassword = (query, cb) => {
	var queryObj = {};
	queryObj.userPassword = query.userPassword;
	Students.update(queryObj, {
		where: {
			userID: query.loginuserID
		}
	}).then((data) => {
		Students.findAll({
			where: {
				userID: query.loginuserID
			} //, userSignupOTPVerified: "Yes"
		})
		.then((data) => {
			//console.log(data);
			cb(data);
		})
		.catch((err) => {
			cb(err);
		});

	});

};
// user home
// get user
exports.getUserDetails = (query, cb) => {

	Students.findOne({
		where: {
			userID: query.loginuserID,
			userSignupOTPVerified: "Yes"
		} //, userSignupOTPVerified: "Yes"
	})
	.then((data) => {
		//console.log(data);
		cb(data);
	})
	.catch((err) => {
		cb(err);
	});

};

exports.activateAccount = (query, cb) => {
	var queryObj = {};
	queryObj.userSignupOTPVerified = "Yes";
	queryObj.userVerified = "Yes";
	Students.update(queryObj, {
		where: {
			userEmail: query.userEmail
		}
	}).then((data) => {
		Students.findAll({
			where: {
				userEmail: query.userEmail
			} //, userSignupOTPVerified: "Yes"
		})
		.then((data) => {
			//console.log(data);
			cb(data);
		})
		.catch((err) => {
			cb(err);
		});

	});

};

exports.validateAPI = (query, ret) => {

	var data = {};
	if ((query.languageID !== null) && (query.languageID !== '') && (query.languageID !== "0")) {
		if ((query.apiType !== null) && (query.apiType !== '')) {
			if ((query.apiVersion !== null) && (query.apiVersion !== '')) {

				return "";
			} else {

				return "apiVersion is missing";

			}
		} else {

			return "apiType is missing";

		}
	} else {

		return "languageID is missing";

	}

};

exports.makeCode = (length, ret) => {

	var result = '';
	var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	var charactersLength = characters.length;
	for (var i = 0; i < length; i++) {
		result += characters.charAt(Math.floor(Math.random() * charactersLength));
	}

	return result;

};
