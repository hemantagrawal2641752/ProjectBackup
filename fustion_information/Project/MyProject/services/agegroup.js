var models = require('../models');
var sequelize = require('../common/mysql');
var AgeGroup = models.AgeGroup;

exports.getAgeGroup = (query, cb) => {
	var languageID = query.languageID,
		apiType = query.apiType,
		agegroupID = query.agegroupID,
		apiVersion = query.apiVersion,
		pageNum = query.page,
		pageSize = query.pagesize;
		
	var offset = pageNum * pageSize;
	var limit = pageSize;
    
    AgeGroup.findAndCountAll({
		where: { agegroupStatus: "Active" },
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
