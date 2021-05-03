var Chapterfiles = require('../services').Chapterfiles;
var config = require('../config');
var async = require('async');

exports.getChapeterfileList = (req, res, next) => {
	var query = {};
	query.languageID = req.body.languageID;
	query.apiType = req.body.apiType;
	query.coursechapterID = req.body.coursechapterID;
	query.apiVersion = req.body.apiVersion;
	query.page = req.body.page;
	query.pagesize = req.body.pagesize || 10;
	Chapterfiles.getChapeterfiles(query, (ret) => {
		//console.log(ret);
		if(ret)
		{
			
			res.json({
			status: "true",
			data: ret,
			message: 'Course subjects found.'
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
