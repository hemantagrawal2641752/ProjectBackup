var Country = require('../services').Country;
var config = require('../config');
var async = require('async');

exports.countryList = (req, res, next) => {
	var query = {};
	query.languageID = req.body.languageID;
	query.apiType = req.body.apiType;
	query.page = req.body.page;
	query.pagesize = req.body.pagesize || 10; 
	query.apiVersion = req.body.apiVersion;
	Country.getCountries(query, (ret) => {
		
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