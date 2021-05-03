var State = require('../services').State;
var config = require('../config');
var async = require('async');

exports.stateList = (req, res, next) => {
	var query = {};
	query.languageID = req.body.languageID;
	query.countryID = req.body.countryID;
	query.apiType = req.body.apiType;
	var pageNum = query.page = req.body.page;
	var pageSize = query.pagesize = req.body.pagesize || 10;
	query.apiVersion = req.body.apiVersion;
	State.getStates(query, (ret) => {
		
		if(ret)
		{
			
			res.json({
			status: "true",
			data: ret,
			message: 'States found.'
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
