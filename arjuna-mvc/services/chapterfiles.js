var models = require('../models');
var sequelize = require('../common/mysql');
var Chapterfiles = models.Chapterfiles;

exports.getChapeterfiles = (query, cb) => {
	var languageID = query.languageID,
		apiType = query.apiType,
		apiVersion = query.apiVersion,
		pageNum = query.page,
		coursechapterID = query.coursechapterID,
		pageSize = query.pagesize;
		
	var offset = pageNum * pageSize;
	var limit = pageSize;	
		
	Chapterfiles.findAndCountAll({
		where: { chapterfileStatus: "Active", coursechapterID: coursechapterID	},
		order: [['chapterfile', 'ASC']]//,
//offset,
		//limit
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