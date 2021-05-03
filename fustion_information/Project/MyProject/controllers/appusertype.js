var AppUserType = require('../services').AppUserType;
var config = require('../config');
var async = require('async');

exports.AppUserTypeList = (req, res, next) => {
	var query = {};
	query.languageID = req.body.languageID;
	query.searchCondition = req.body.searchCondition;
	query.apiType = req.body.apiType;
	var pageNum = query.page = req.body.page;
	var pageSize = query.pagesize = req.body.pagesize || 10;
    query.apiVersion = req.body.apiVersion;
    
	AppUserType.getAppUserType(query, (ret) => {
		
		if(ret)
		{
			
			res.json({
			status: "true",
			data: ret,
			
			})
		}
		else
		{
			res.json({status: "false",
			data: ret.errors,
			message: 'AppUserType not found.'})
		}	
	});

};
