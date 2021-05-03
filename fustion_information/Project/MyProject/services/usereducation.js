'use strict';
var models = require('../models');
var sequelize = require('../common/mysql');
const Sequelize = require('sequelize');
var Usereducation = models.Usereducation;
var City = models.City;
var dateTime = require('node-datetime');

// user registration
exports.addEducation = (query, cb) => {
	var queryObj = {};
	queryObj.userID = query.loginuserID;
	queryObj.languageID = query.languageID;
	queryObj.usereducationSchoolName = query.usereducationSchoolName;
	queryObj.usereducationDegree = query.usereducationDegree;
	queryObj.usereducationPeriodOfTimeFrom = query.usereducationPeriodOfTimeFrom;
	queryObj.usereducationPeriodOfTimeTo = query.usereducationPeriodOfTimeTo;
	queryObj.usereducationDescription = query.usereducationDescription;
	queryObj.usereducationPrivarcyType = query.usereducationPrivarcyType;
	queryObj.usereducationPrivarcyData = query.usereducationPrivarcyData;
	Usereducation.build(queryObj).save().then((data) => {
		//console.log(data.dataValues);
		//cb(data.dataValues);
		var statement = "SELECT  user_education.*  FROM user_education where usereducationIsDeleted='1' AND userID="+ query.loginuserID;
	statement += " ORDER BY usereducationID DESC " ;
	sequelize.query(statement).then((data) => {
		//console.log(data);
		cb(data);
	});
		
	}).catch((err) => {
		cb(err);
	})
}


// update profile
exports.updateEducation = (query, cb) => {
	var queryObj = {};
	queryObj.userID = query.loginuserID;
	queryObj.languageID = query.languageID;
	queryObj.usereducationSchoolName = query.usereducationSchoolName;
	queryObj.usereducationDegree = query.usereducationDegree;
	queryObj.usereducationPeriodOfTimeFrom = query.usereducationPeriodOfTimeFrom;
	queryObj.usereducationPeriodOfTimeTo = query.usereducationPeriodOfTimeTo;
	queryObj.usereducationDescription = query.usereducationDescription;
	queryObj.usereducationPrivarcyType = query.usereducationPrivarcyType;
	queryObj.usereducationPrivarcyData = query.usereducationPrivarcyData;
	queryObj.usereducationID = query.usereducationID;
	Usereducation.update(queryObj, {
		where: {
			usereducationID: query.usereducationID
		}
	}).then((data) => {
		
	var statement = "SELECT  user_education.*  FROM user_education where usereducationIsDeleted='1' AND userID="+ query.loginuserID;
	statement += " ORDER BY usereducationID DESC " ;
	sequelize.query(statement).then((data) => {
		//console.log(data);
		cb(data);
	});
		
	
		
		
	});
	
};
exports.removeEducation = (query, cb) => {
	var queryObj = {};
	queryObj.userID = query.loginuserID;
	queryObj.usereducationID = query.usereducationID;
	queryObj.usereducationIsDeleted = query.usereducationIsDeleted;
	Usereducation.update(queryObj, {
		where: {
			usereducationID: query.usereducationID
		}
	}).then((data) => {
		
	var statement = "SELECT  user_education.*  FROM user_education where usereducationIsDeleted='1' AND userID="+ query.loginuserID;
	statement += " ORDER BY usereducationID DESC " ;
	sequelize.query(statement).then((data) => {
		//console.log(data);
		cb(data);
	});
		
	
		
		
	});
	
};
// update profile picture
exports.listEducation = (query, cb) => {
	var queryObj = {};	
	queryObj.userID = query.loginuserID;
	 
	Usereducation.findAll({
		where: { userID: query.loginuserID,usereducationIsDeleted: "1"} //, userSignupOTPVerified: "Yes"
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


