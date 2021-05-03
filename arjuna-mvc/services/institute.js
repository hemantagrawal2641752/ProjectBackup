var models = require('../models');
var sequelize = require('../common/mysql');
var Institute = models.Institute;

exports.allInstituteQuery = (query, cb) => {
	var languageID = query.languageID,
		apiType = query.apiType,
		apiVersion = query.apiVersion,
		pageNum = query.page,
		pageSize = query.pagesize;

	var statement = "SELECT  * FROM institute WHERE instituteStatus='Active'";
	statement += " ORDER BY instituteName limit " + ((pageNum) * pageSize) + ", " + pageSize;
	sequelize.query(statement).then((data) => {
		cb(data);
	});
};

exports.instituteTotalCount = (query, cb) => {
	var languageID = query.languageID,
		apiType = query.apiType,
		apiVersion = query.apiVersion;
		
	
	var statement = "SELECT COUNT(instituteID) as 'totalCount' FROM `institute` WHERE instituteStatus='Active' ";
	sequelize.query(statement).then((rows) => {
		cb(rows);
	});
};
