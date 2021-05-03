var models = require('../models');
var sequelize = require('../common/mysql');
var Coursechapters = models.Coursechapters;

exports.getCourseChapeters = (query, cb) => {
	var languageID = query.languageID,
		apiType = query.apiType,
		apiVersion = query.apiVersion,
		pageNum = query.page,
		coursesubjID = query.coursesubjID,
		pageSize = query.pagesize;
		
	var offset = pageNum * pageSize;
	var limit = pageSize;	
		
	Coursechapters.findAndCountAll({
		where: { coursechapterStatus	: "Active", coursesubjID: coursesubjID	},
		order: [['coursechapterName', 'ASC']]//,
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
