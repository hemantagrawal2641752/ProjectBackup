var models = require('../models');
var sequelize = require('../common/mysql');
const Sequelize = require('sequelize');
var Userforgetpass = models.Userforgetpass;

exports.createForgotRequest = (query, cb) => {
	var queryObj = {};
	queryObj.userID = query.userID;
	queryObj.userforgetpassResetCode = query.userforgetpassResetCode;
	queryObj.userforgetpassResetCodeExp = query.userforgetpassResetCodeExp;

	Userforgetpass.build(queryObj).save().then((data) => {

		cb(data.dataValues);
	}).catch((err) => {
		
		cb(err);
	})
};

exports.verifyForgotRequestCode = (query, cb) => {
	var queryObj = {};
	queryObj.userforgetpassResetCode = query.userforgetpassResetCode;
	
	Userforgetpass.findOne({
		where: {
			userforgetpassResetCode: query.userforgetpassResetCode 
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
