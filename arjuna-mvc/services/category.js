var models = require('../models');
var sequelize = require('../common/mysql');
var Category = models.Category;


exports.getCategory = (query, cb) => {
	var languageID = query.languageID,
		apiType = query.apiType,
		apiVersion = query.apiVersion,
		pageNum = query.page,
		pageSize = query.pagesize;
		
	var offset = pageNum * pageSize;
	var limit = pageSize;	
		
	Category.findAndCountAll({
		where: { categoryStatus: "Active"	},
		order: [['categoryName', 'ASC']],
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

