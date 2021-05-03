var models = require('../models');
var sequelize = require('../common/mysql');
var Stream = models.Stream;

exports.allStreamQuery = (query, cb) => {
	var languageID = query.languageID,
		apiType = query.apiType,
		apiVersion = query.apiVersion,
		pageNum = query.page,
		pageSize = query.pagesize;

	var statement = "SELECT  * FROM stream WHERE streamStatus='Active'";
	statement += " ORDER BY streamName limit " + ((pageNum) * pageSize) + ", " + pageSize;
	sequelize.query(statement).then((data) => {
		cb(data);
	});
};

exports.streamTotalCount = (query, cb) => {
	var languageID = query.languageID,
		apiType = query.apiType,
		apiVersion = query.apiVersion;
		
	
	var statement = "SELECT COUNT(streamID) as 'totalCount' FROM `stream` WHERE streamStatus='Active' ";
	sequelize.query(statement).then((rows) => {
		cb(rows);
	});
};
