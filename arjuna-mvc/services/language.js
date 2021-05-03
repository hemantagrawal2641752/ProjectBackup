var models = require('../models');
var sequelize = require('../common/mysql');
var Language = models.Language;

exports.getLanguage = (query, cb) => {
	var languageID = query.languageID,
		apiType = query.apiType,
		apiVersion = query.apiVersion,
		pageNum = query.page,
		pageSize = query.pagesize;
		
	var offset = pageNum * pageSize;
	var limit = pageSize;	
		
	Language.findAndCountAll({
		where: { languageStatus: "Active" },
		order: [['languageName', 'ASC']],
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