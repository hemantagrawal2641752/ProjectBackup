var models = require('../models');
var sequelize = require('../common/mysql');
var Coursesubjects = models.Coursesubjects;

exports.getCoursesubjects = (query, cb) => {
	var languageID = query.languageID,
		apiType = query.apiType,
		apiVersion = query.apiVersion,
		pageNum = query.page,
		courseID	 = query.courseID	,
		pageSize = query.pagesize;
		
	var offset = pageNum * pageSize;
	var limit = pageSize;	
		
	Coursesubjects.findAndCountAll({
		where: { coursesubjStatus	: "Active", courseID	: courseID		},
		order: [['coursesubjName', 'ASC']]//,
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
