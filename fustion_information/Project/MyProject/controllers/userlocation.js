var Userlocation = require('../services').Userlocation;
var config = require('../config');
var async = require('async');
var  isEqual = require('lodash.isequal');


exports.add = (req, res, next) => {
	var query = {};
	query.loginuserID = req.body.loginuserID;
	query.countryID = req.body.countryID;
	query.userlocationPincode = req.body.userlocationPincode;
	query.cityID = req.body.cityID;
	query.userlocationType = req.body.userlocationType;
	

			Userlocation.addLocation(query, (ret) => {
				
			if (ret) {
				res.json({
					status: "true",
					data: ret[0],
					message: 'Location added successfully.'
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
exports.addCity = (req, res, next) => {
	var query = {};
	query.loginuserID = req.body.loginuserID;
	query.cityID = req.body.cityID;
	query.userlocationType = req.body.userlocationType;
	

			Userlocation.addCity(query, (ret) => {
				
			if (ret) {
				res.json({
					status: "true",
					data: ret[0],
					message: 'City added successfully.'
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
exports.updateCity = (req, res, next) => {
	var query = {};
	query.loginuserID = req.body.loginuserID;
	query.cityID = req.body.cityID;
	query.userlocationType = req.body.userlocationType;
	query.userlocationID = req.body.userlocationID;
	

			Userlocation.updateCity(query, (ret) => {
				//console.log(ret);
			if (ret) {
				res.json({
					status: "true",
					data: ret[0],
					message: 'City updated successfully.'
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
exports.updateLocation = (req, res, next) => {
	var query = {};
	query.loginuserID = req.body.loginuserID;
	query.cityID = req.body.cityID;
	query.userlocationType = req.body.userlocationType;
	query.countryID = req.body.countryID;
	query.userlocationPincode = req.body.userlocationPincode;
	query.userlocationID = req.body.userlocationID;
	

			Userlocation.updateLocation(query, (ret) => {
				//console.log(ret);
			if (ret) {
				res.json({
					status: "true",
					data: ret[0],
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
