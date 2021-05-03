var City = require('../services').City;
var config = require('../config');
var async = require('async');

exports.cityList = (req, res, next) => {
	var query = {};
	query.languageID = req.body.languageID;
	query.apiType = req.body.apiType;
	query.stateID = req.body.stateID;
	query.countryID = req.body.countryID;
	var pageNum = query.page = req.body.page;
	var pageSize = query.pagesize = req.body.pagesize || 10;
	query.apiVersion = req.body.apiVersion;
	City.getCities(query, (ret) => {
		
		if(ret)
		{
			
			res.json({
			status: "true",
			data: ret,
			message: 'Course found.'
			})
		}
		else
		{
			res.json({status: "false",
			data: ret.errors,
			message: ''})
		}	
	});

};