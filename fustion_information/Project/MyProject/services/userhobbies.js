'use strict';
var models = require('../models');
var sequelize = require('../common/mysql');
const Sequelize = require('sequelize');
var Userhobbies = models.Userhobbies;
var City = models.City;
var dateTime = require('node-datetime');

// user registration
exports.addHobby = (query, cb,next) => {
	var queryObj = {};
	queryObj.userID = query.loginuserID;
	queryObj.languageID = query.languageID;
	queryObj.hobbyID = query.hobbyID;
	queryObj.hobbies = query.hobbies;
	var loginuserID= "";
	query.hobbies.forEach(function(entry, index) {
		
		
		Userhobbies.create({ userID : entry.loginuserID, hobbyID: entry.hobbyID});
		loginuserID = entry.loginuserID;
		
	});
	var statement = "SELECT  user_hobbies.*,hobby.hobbyName  FROM user_hobbies INNER JOIN hobby ON hobby.hobbyID = user_hobbies.hobbyID where userID="+ query.loginuserID;
	statement += " ORDER BY userhobbiesID DESC " ;
	sequelize.query(statement).then((data) => {
		//console.log(data);
		cb(data);
	});
	/*next;
	Userhobbies.findAll({
		where: { userID: loginuserID} //, userSignupOTPVerified: "Yes"
		})
		.then((data) => 
		{
			//console.log(data);
			cb(data);
		})
		
	*/
	//);
	//next;
	
	/*Userhobbies.build(queryObj).save().then((data) => {
		//console.log(data.dataValues);
		//cb(data.dataValues);
		var statement = "SELECT  user_hobbies.*  FROM user_hobbies where userID="+ query.loginuserID;
	statement += " ORDER BY userhobbiesID DESC " ;
	sequelize.query(statement).then((data) => {
		//console.log(data);
		cb(data);
	});
		
	}).catch((err) => {
		cb(err);
	})*/
	
}


// update profile
exports.updateHobby = (query, cb) => {
	var queryObj = {};
	queryObj.userID = query.loginuserID;
	queryObj.languageID = query.languageID;
	queryObj.hobbyID = query.hobbyID;
	queryObj.userhobbiesID = query.userhobbiesID;
	Userhobbies.update(queryObj, {
		where: {
			userhobbiesID: query.userhobbiesID
		}
	}).then((data) => {
		
	var statement = "SELECT  user_hobbies.*,hobby.hobbyName  FROM user_hobbies INNER JOIN hobby ON hobby.hobbyID = user_hobbies.hobbyID where userID="+ query.loginuserID;
	statement += " ORDER BY userhobbiesID DESC " ;
	sequelize.query(statement).then((data) => {
		//console.log(data);
		cb(data);
	});
		
	
		
		
	});
	
};
exports.removeHobby = (query, cb) => {
	var queryObj = {};
	queryObj.userID = query.loginuserID;
	queryObj.userhobbiesID = query.userhobbiesID;
	Userhobbies.update(queryObj, {
		where: {
			userhobbiesID: query.userhobbiesID
		}
	}).then((data) => {
		
	var statement = "SELECT  user_hobbies.*,hobby.hobbyName  FROM user_hobbies INNER JOIN hobby ON hobby.hobbyID = user_hobbies.hobbyID where userID="+ query.loginuserID;
	statement += " ORDER BY userhobbiesID DESC " ;
	sequelize.query(statement).then((data) => {
		//console.log(data);
		cb(data);
	});
		
	
		
		
	});
	
};
// update profile picture
exports.listHobby = (query, cb) => {
	var queryObj = {};	
	queryObj.userID = query.loginuserID;
	 
	/*Userhobbies.findAll({
		where: { userID: query.loginuserID} //, userSignupOTPVerified: "Yes"
		})
		.then((data) => 
		{
			//console.log(data);
			cb(data);
		})
		.catch((err) => {
			cb(err);
	});*/
	var statement = "SELECT  user_hobbies.*,hobby.hobbyName  FROM user_hobbies INNER JOIN hobby ON hobby.hobbyID = user_hobbies.hobbyID where userID="+ query.loginuserID;
	statement += " ORDER BY userhobbiesID DESC " ;
	sequelize.query(statement).then((data) => {
		//console.log(data);
		cb(data);
	});
		
		
};


