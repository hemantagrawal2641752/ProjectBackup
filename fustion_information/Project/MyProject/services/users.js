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
	queryObj.languageID = query.languageID;
	queryObj.userEmail = query.userEmail;
	queryObj.userFirstName = query.userFirstName;
	queryObj.userLastName = query.userLastName;
	queryObj.userGender = query.userGender;
	queryObj.userMobile = query.userMobile;
	queryObj.userPassword = query.userPassword;
	queryObj.userCountryCode = query.userCountryCode;
	queryObj.userProfilePicture = query.userProfilePicture;
	queryObj.userOVerified = query.userOVerified;
	queryObj.apputypeID = query.apputypeID;
	queryObj.appuroleID = query.appuroleID;
	queryObj.footbltypeID = query.footbltypeID;
	queryObj.specialityID = query.specialityID;
	queryObj.userReferKey = query.userReferKey;
	queryObj.agegroupID = query.agegroupID;
	queryObj.userCreatedDate = formatted;
	
	queryObj.userOTP = "1234";
	
	
	Students.build(queryObj).save().then((data) => {
		//console.log(data.dataValues);
		cb(data.dataValues);
	}).catch((err) => {
		cb(err);
	})
}

// login with password
exports.validateLogin = (query, cb) => {
	var queryObj = {};
	 queryObj.offset = query.pageNum * query.pagesize;
	 queryObj.limit = query.pagesize;
	
	Students.findOne({
		where: { userEmail: query.userEmail,userOVerified: "Yes"} //, userSignupOTPVerified: "Yes"
		})
		.then((data) => 
		{
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
	queryObj.userFirstName = query.userFirstName;
	queryObj.userLastName = query.userLastName;
	queryObj.userMobile = query.userMobile;
	queryObj.userCountryCode = query.userCountryCode;
	queryObj.userProfilePicture = query.userProfilePicture;
	queryObj.userGender = query.userGender;
	queryObj.apputypeID = query.apputypeID;
	queryObj.appuroleID = query.appuroleID;
	queryObj.footbltypeID = query.footbltypeID;
	queryObj.specialityID = query.specialityID;
	queryObj.userReferKey = query.userReferKey;
	queryObj.agegroupID = query.agegroupID;
	

	Students.update(queryObj, {
		where: {
			userID: query.loginuserID
		}
	}).then((data) => {
		Students.findAll({
		where: {userID: query.loginuserID} //, userSignupOTPVerified: "Yes"
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
		where: {userID: query.loginuserID} //, userSignupOTPVerified: "Yes"
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
	queryObj.userExamNotification	 = query.userExamNotification	;
	Students.update(queryObj, {
		where: {
			userID: query.loginuserID
		}
	}).then((data) => {
		Students.findAll({
		where: {userID: query.loginuserID} //, userSignupOTPVerified: "Yes"
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
		where: {$or: [{userEmail: {$eq:query.userEmail}}, {userMobile: {$eq:query.userMobile}}]}
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
		where: {userEmail: query.userEmail}
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
		where: {userID: query.loginuserID} //, userSignupOTPVerified: "Yes"
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
		where: { userID: query.loginuserID,userOVerified: "Yes"} //, userSignupOTPVerified: "Yes"
		})
		.then((data) => 
		{
			//console.log(data);
			cb(data);
		})
		.catch((err) => {
			cb(err);
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

//OTP Verification
exports.verificationotp = (query, cb) => {
	Students.findOne({
		where: {userID: query.loginuserID}
	})
	.then((data) => {
		//console.log(data);
		cb(data);
	})
	.catch((err) => {
		cb(err);
});


};


// login with mobile number
exports.loginWithNumber = (query, cb) => {
	var queryObj = {};
	 queryObj.offset = query.pageNum * query.pagesize;
	 queryObj.limit = query.pagesize;
	
	Students.findOne({
		where: { userMobile: query.userMobile,userOVerified: "Yes"} //, userSignupOTPVerified: "Yes"
		})
		.then((data) => 
		{
			//console.log(data);
			cb(data);
		})
		.catch((err) => {
			cb(err);
	});
	
};

// user forgot password with mobile
exports.forgotpasswithmobile = (query, cb) => {
	
	Students.findOne({
		where: {userMobile: query.userMobile}
		})
		.then((data) => {
			//console.log(data);
			cb(data);
		})
		.catch((err) => {
			cb(err);
	});
	
};

// resend OTP
exports.resendotp = (query, cb) => {
	
	Students.findOne({
		where: {userEmail: query.userEmail}
		})
		.then((data) => {
			//console.log(data);
			cb(data);
		})
		.catch((err) => {
			cb(err);
	});
	
};