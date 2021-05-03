'use strict';
var models = require('../models');
var sequelize = require('../common/mysql');
const Sequelize = require('sequelize');
var Useremployement = models.Useremployement;
var dateTime = require('node-datetime');

// user registration
exports.addEmployement = (query, cb) => {
	var queryObj = {};
	queryObj.userID = query.loginuserID;
	queryObj.languageID = query.languageID;
	queryObj.useremployementPositionCompanyName = query.useremployementPositionCompanyName;
	queryObj.jobfuncID = query.jobfuncID;
	queryObj.useremployementPeriodOfTimeFrom = query.useremployementPeriodOfTimeFrom;
	queryObj.useremployementPeriodOfTimeTo = query.useremployementPeriodOfTimeTo;
	queryObj.useremployementCityText = query.useremployementCityText;
	queryObj.useremployementCountryText = query.useremployementCountryText;
	queryObj.useremployementDescription = query.useremployementDescription;
	queryObj.useremployementPrivacyType = query.useremployementPrivacyType;
	queryObj.useremployementIsCurrent = query.useremployementIsCurrent;
	Useremployement.build(queryObj).save().then((data) => {
		//console.log(data.dataValues);
		//cb(data.dataValues);
		var statement = "SELECT  user_employement.*,jobfunction.jobfuncName  FROM user_employement INNER JOIN jobfunction ON user_employement.jobfuncID	 = jobfunction.jobfuncID  where useremployementIsDeleted='1' AND userID="+ query.loginuserID;
	statement += " ORDER BY useremployementID DESC " ;
	sequelize.query(statement).then((data) => {
		//console.log(data);
		cb(data);
	});
		
	}).catch((err) => {
		cb(err);
	})
}


// update profile
exports.updateEmployement = (query, cb) => {
	var queryObj = {};
	queryObj.userID = query.loginuserID;
	queryObj.languageID = query.languageID;
	queryObj.useremployementPositionCompanyName = query.useremployementPositionCompanyName;
	queryObj.jobfuncID = query.jobfuncID;
	queryObj.useremployementPeriodOfTimeFrom = query.useremployementPeriodOfTimeFrom;
	queryObj.useremployementPeriodOfTimeTo = query.useremployementPeriodOfTimeTo;
	queryObj.useremployementCityText = query.useremployementCityText;
	queryObj.useremployementCountryText = query.useremployementCountryText;
	queryObj.useremployementDescription = query.useremployementDescription;
	queryObj.useremployementPrivacyType = query.useremployementPrivacyType;
	queryObj.useremployementIsCurrent = query.useremployementIsCurrent;
	queryObj.useremployementID = query.useremployementID;
	Useremployement.update(queryObj, {
		where: {
			useremployementID: query.useremployementID
		}
	}).then((data) => {
		
	var statement = "SELECT  user_employement.*,jobfunction.jobfuncName  FROM user_employement INNER JOIN jobfunction ON user_employement.jobfuncID	 = jobfunction.jobfuncID  where useremployementIsDeleted='1' AND userID="+ query.loginuserID;
	statement += " ORDER BY useremployementID DESC " ;
	sequelize.query(statement).then((data) => {
		//console.log(data);
		cb(data);
	});
		
	
		
		
	});
	
};
exports.removeEmployement = (query, cb) => {
	var queryObj = {};
	queryObj.userID = query.loginuserID;
	queryObj.useremployementID = query.useremployementID;
	queryObj.useremployementIsDeleted = query.useremployementIsDeleted;
	Useremployement.update(queryObj, {
		where: {
			useremployementID: query.useremployementID
		}
	}).then((data) => {
		
	var statement = "SELECT  user_employement.*,jobfunction.jobfuncName  FROM user_employement INNER JOIN jobfunction ON user_employement.jobfuncID	 = jobfunction.jobfuncID  where useremployementIsDeleted='1' AND userID="+ query.loginuserID;
	statement += " ORDER BY useremployementID DESC " ;
	sequelize.query(statement).then((data) => {
		//console.log(data);
		cb(data);
	});
		
	
		
		
	});
	
};
// update profile picture
exports.listEmployement = (query, cb) => {
	var queryObj = {};	
	queryObj.userID = query.loginuserID;
	 
	/*Useremployement.findAll({
		where: { userID: query.loginuserID,useremployementIsDeleted: "1"} //, userSignupOTPVerified: "Yes"
		})
		.then((data) => 
		{
			//console.log(data);
			cb(data);
		})
		.catch((err) => {
			cb(err);
	});*/
	var statement = "SELECT  user_employement.*,jobfunction.jobfuncName  FROM user_employement INNER JOIN jobfunction ON user_employement.jobfuncID	 = jobfunction.jobfuncID  where useremployementIsDeleted='1' AND userID="+ query.loginuserID;
	statement += " ORDER BY useremployementID DESC " ;
	sequelize.query(statement).then((data) => {
		//console.log(data);
		cb(data);
	});
		
		
};


