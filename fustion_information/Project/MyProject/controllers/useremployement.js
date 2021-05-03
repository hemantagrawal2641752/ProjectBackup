var Useremployement = require('../services').Useremployement;
var config = require('../config');
var async = require('async');
var  isEqual = require('lodash.isequal');


exports.add = (req, res, next) => {
	var query = {};
	query.loginuserID = req.body.loginuserID;
	query.languageID = req.body.languageID;
	query.useremployementPositionCompanyName = req.body.useremployementPositionCompanyName;
	query.jobfuncID = req.body.jobfuncID;
	query.useremployementPeriodOfTimeFrom = req.body.useremployementPeriodOfTimeFrom;
	query.useremployementPeriodOfTimeTo = req.body.useremployementPeriodOfTimeTo;
	query.useremployementCityText = req.body.useremployementCityText;
	query.useremployementCountryText = req.body.useremployementCountryText;
	query.useremployementDescription = req.body.useremployementDescription;
	query.useremployementPrivacyType = req.body.useremployementPrivacyType;
	query.useremployementIsCurrent = req.body.useremployementIsCurrent;
	
	

			Useremployement.addEmployement(query, (ret) => {
				
			if (ret) {
				res.json({
					status: "true",
					data: ret[0],
					message: 'Employement added successfully.'
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
	query.useremployementPositionCompanyName = req.body.useremployementPositionCompanyName;
	query.jobfuncID = req.body.jobfuncID;
	query.useremployementPeriodOfTimeFrom = req.body.useremployementPeriodOfTimeFrom;
	query.useremployementPeriodOfTimeTo = req.body.useremployementPeriodOfTimeTo;
	query.useremployementCityText = req.body.useremployementCityText;
	query.useremployementCountryText = req.body.useremployementCountryText;
	query.useremployementDescription = req.body.useremployementDescription;
	query.useremployementPrivacyType = req.body.useremployementPrivacyType;
	query.useremployementIsCurrent = req.body.useremployementIsCurrent;
	query.useremployementID = req.body.useremployementID;
	

			Useremployement.updateEmployement(query, (ret) => {
				//console.log(ret);
			if (ret) {
				res.json({
					status: "true",
					data: ret[0],
					message: 'Employement updated successfully.'
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
	query.useremployementID = req.body.useremployementID;
	

			Useremployement.removeEmployement(query, (ret) => {
				//console.log(ret);
			if (ret) {
				res.json({
					status: "true",
					data: ret[0],
					message: 'Employement deleted successfully.'
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
	
	

			Useremployement.listEmployement(query, (ret) => {
				//console.log(ret);
			if (ret) {
				res.json({
					status: "true",
					data: ret,
					message: 'Employement updated successfully.'
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
