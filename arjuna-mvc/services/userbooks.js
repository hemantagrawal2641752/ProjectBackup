'use strict';
var models = require('../models');
var sequelize = require('../common/mysql');
const Sequelize = require('sequelize');
var Userbooks = models.Userbooks;
var Courses = models.Courses;
var dateTime = require('node-datetime');

// Purchase book
exports.purchaseBook = (query, cb ) => {
	var queryObj = {};
	var dt = dateTime.create();
	var formatted = dt.format('Y-m-d H:M:S');
	queryObj.userID = query.userID;
	queryObj.courseID = query.courseID;
	queryObj.userbookPurchaseDate = formatted;
	queryObj.userbookPurchaseAmount = query.userbookPurchaseAmount;
	Userbooks.build(queryObj).save().then((data) => {
		//console.log(data.dataValues);
		cb(data.dataValues);
	}).catch((err) => {
		cb(err);
	})
}
// Get my purchased list
exports.bookList = (query, cb) => {
	var offset = query.pageNum * query.pagesize;
	var limit = query.pagesize;
	
	
	var statement = "SELECT  userbooks.*, courses.* FROM userbooks INNER JOIN courses on courses.courseID = userbooks.courseID where userID="+ query.userID;
	statement += " ORDER BY userbookPurchaseDate DESC " ;
//	if (keyword) statement += " and tasks.name like " + "'%" + keyword + "%'";
//	if (userId) statement += " and user_id = " + userId;
//	statement += " ORDER BY status,update_date DESC limit " + ((pageNum - 1) * pageSize) + ", " + pageSize;
	sequelize.query(statement).then((data) => {
		console.log(data);
		cb(data);
	});

	
	/*Userbooks.findAndCountAll({
		attributes: ['userbookID', 'userID', 'courseID', 'userbookPurchaseDate', 'userbookPurchaseAmount', 'courses.courseName', 'courses.courseImage','courses.courseDuration'],
		include: [{ 
			model: Courses//,required: true,                      
			//,
			//attributes: []
		}],
		where: { userID: query.userID}
		//where: { userID: query.userID}
		 //, userSignupOTPVerified: "Yes"
		})
		.then((data) => 
		{
			console.log(data);
			cb(data);
		})
		.catch((err) => {
			console.log(err);
			cb(err);
	});*/
	
};
