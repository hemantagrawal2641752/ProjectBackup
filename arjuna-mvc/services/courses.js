var models = require('../models');
var sequelize = require('../common/mysql');
const Sequelize = require('sequelize');
var Courses = models.Courses;


exports.getCoursList = (query, cb) => {
	var languageID = query.languageID,
		apiType = query.apiType,
		apiVersion = query.apiVersion,
		pageNum = query.page,
		loginuserID = query.loginuserID,
		pageSize = query.pagesize;
	var offset = pageNum * pageSize;
	var limit = pageSize;	
	var searchGender = " 1 =1 "
	var searchExperience = " 1=1" ;
	if (query.searchCondition && query.searchCondition !== '') {
		searchGender = {'courseName': {$like:query.searchCondition+'%'}};
	} else if (query.searchCondition && query.searchCondition === '') {
		searchGender = {'courseName': {$not: null}};
	}
	if (query.searchCondition && query.searchCondition !== '') {
		searchExperience = {'courseDescription': {$like:query.searchCondition+'%'}};
	} else if (query.searchCondition && query.searchCondition === '') {
		searchExperience = {'courseDescription': {$not: null}};
	}

	
	queryWhere = {
    $and: [
        {$or: [
            [searchGender],
            [searchExperience]]}
    ]
};

	
	Courses.findAndCountAll({
		where:  queryWhere,	//,
		offset,
		limit
		})
		.then((data) => 
		{
			//console.log(data);
			cb(data);
		})
		.catch((err) => {
			cb(err);
	});
};

