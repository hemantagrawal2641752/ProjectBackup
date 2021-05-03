var Userhobbies = require('../services').Userhobbies;
var config = require('../config');
var async = require('async');
var  isEqual = require('lodash.isequal');


exports.add = (req, res, next) => {
	var query = {};
	query.loginuserID = req.body.loginuserID;
	query.languageID = req.body.languageID;
	query.hobbyID = req.body.hobbyID;
	query.hobbies = req.body.hobbies;
	
	

			Userhobbies.addHobby(query, (ret) => {
				
			if (ret) {
				/*res.json({
					status: "true",
					data: ret[0],
					message: 'Hobby added successfully.'
				})*/
				Userhobbies.listHobby(query, (ret) => {
				//console.log(ret);
			if (ret) {
				res.json({
					status: "true",
					data: ret,
					message: 'Hobby updated successfully.'
				})
			} else {
				res.json({
					status: "false",
					data: ret.errors,
					message: ''
				})
			}
		});
				
				
			} else {
				res.json({
					status: "false",
					data: ret.errors,
					message: ''
				})
			}
		});
	 
};
exports.update = (req, res, next) => {
	var query = {};
	query.loginuserID = req.body.loginuserID;
	query.languageID = req.body.languageID;
	query.hobbyID = req.body.hobbyID;
	query.userhobbiesID = req.body.userhobbiesID;
	
	

			Userhobbies.updateHobby(query, (ret) => {
				//console.log(ret);
			if (ret) {
				res.json({
					status: "true",
					data: ret[0],
					message: 'Hobby updated successfully.'
				})
			} else {
				res.json({
					status: "false",
					data: ret.errors,
					message: ''
				})
			}
		});
	 
};
exports.remove = (req, res, next) => {
	var query = {};
	query.loginuserID = req.body.loginuserID;
	query.hobbyID = req.body.hobbyID;
	

			Userhobbies.removeHobby(query, (ret) => {
				//console.log(ret);
			if (ret) {
				res.json({
					status: "true",
					data: ret[0],
					message: 'Hobby deleted successfully.'
				})
			} else {
				res.json({
					status: "false",
					data: ret.errors,
					message: ''
				})
			}
		});
	 
};
exports.list = (req, res, next) => {
	var query = {};
	query.loginuserID = req.body.loginuserID;
	
	

			Userhobbies.listHobby(query, (ret) => {
				//console.log(ret);
			if (ret) {
				res.json({
					status: "true",
					data: ret,
					message: 'Hobby updated successfully.'
				})
			} else {
				res.json({
					status: "false",
					data: ret.errors,
					message: ''
				})
			}
		});
	 
};
