var Courses = require('../services').Courses;
var config = require('../config');
var async = require('async');

exports.getCourses = (req, res, next) => {
	var query = {};
	query.languageID = req.body.languageID;
	query.apiType = req.body.apiType;
	query.searchCondition = req.body.searchCondition;
	query.pagesize = req.body.pagesize;
	query.page = req.body.page;
	query.apiVersion = req.body.apiVersion;
	Courses.getCoursList(query, (ret) => {
		//console.log(ret);
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
