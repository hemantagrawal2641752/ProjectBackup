var models = require('../models');
var sequelize = require('../common/mysql');
var City = models.City;



exports.getCities = (query, cb) => {
	var languageID = query.languageID,
		apiType = query.apiType,
		apiVersion = query.apiVersion,
		pageNum = query.page,
		varcountryID = query.countryID,
		varstateID = query.stateID,
		pageSize = query.pagesize;
		
	var offset = pageNum * pageSize;
	var limit = pageSize;	
		
	City.findAndCountAll({
		where: { cityStatus: "Active", stateID: varstateID, countryID : varcountryID },
		order: [['cityName', 'ASC']],
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
