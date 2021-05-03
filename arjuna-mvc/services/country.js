var models = require('../models');
var sequelize = require('../common/mysql');
var Country = models.Country;


exports.getCountries = (query, cb) => {
	var languageID = query.languageID,
		apiType = query.apiType,
		apiVersion = query.apiVersion,
		pageNum = query.page,
		pageSize = query.pagesize;
		
	var offset = pageNum * pageSize;
	var limit = pageSize;	
		
	Country.findAndCountAll({
		where: { countryStatus: "Active" },
		order: [['countryName', 'ASC']],
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