var Usereducation = require('../services').Usereducation;
var config = require('../config');
var async = require('async');
var  isEqual = require('lodash.isequal');


exports.add = (req, res, next) => {
		var query = {};
		query.loginuserID = req.body.loginuserID;
		query.languageID = req.body.languageID;
		query.usereducationSchoolName = req.body.usereducationSchoolName;
		query.usereducationDegree = req.body.usereducationDegree;
	query.usereducationPeriodOfTimeFrom = req.body.usereducationPeriodOfTimeFrom;
	query.usereducationPeriodOfTimeTo = req.body.usereducationPeriodOfTimeTo;
	query.usereducationDescription = req.body.usereducationDescription;
	query.usereducationPrivarcyType = req.body.usereducationPrivarcyType;
	query.usereducationPrivarcyType = req.body.usereducationPrivarcyType;
	query.usereducationPrivarcyData = req.body.usereducationPrivarcyData;
	query.usereducationGrade = req.body.usereducationGrade;
	

			Usereducation.addEducation(query, (ret) => {
				
			if (ret) {
				res.json({
					status: "true",
					data: ret[0],
					message: 'Education added successfully.'
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
exports.update = (req, res, next) => {
	var query = {};
	query.loginuserID = req.body.loginuserID;
	query.languageID = req.body.languageID;
	query.usereducationSchoolName = req.body.usereducationSchoolName;
	query.usereducationDegree = req.body.usereducationDegree;
	query.usereducationPeriodOfTimeFrom = req.body.usereducationPeriodOfTimeFrom;
	query.usereducationPeriodOfTimeTo = req.body.usereducationPeriodOfTimeTo;
	query.usereducationDescription = req.body.usereducationDescription;
	query.usereducationPrivarcyType = req.body.usereducationPrivarcyType;
	query.usereducationPrivarcyType = req.body.usereducationPrivarcyType;
	query.usereducationPrivarcyData = req.body.usereducationPrivarcyData;
	query.usereducationID = req.body.usereducationID;
	query.usereducationGrade = req.body.usereducationGrade;
	

			Usereducation.updateEducation(query, (ret) => {
				//console.log(ret);
			if (ret) {
				res.json({
					status: "true",
					data: ret[0],
					message: 'Education updated successfully.'
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
	query.usereducationIsDeleted = "2";
	query.usereducationID = req.body.usereducationID;
	

			Usereducation.removeEducation(query, (ret) => {
				//console.log(ret);
			if (ret) {
				res.json({
					status: "true",
					data: ret[0],
					message: 'Education deleted successfully.'
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
	
	

			Usereducation.listEducation(query, (ret) => {
				//console.log(ret);
			if (ret) {
				res.json({
					status: "true",
					data: ret,
					message: 'Location updated successfully.'
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
