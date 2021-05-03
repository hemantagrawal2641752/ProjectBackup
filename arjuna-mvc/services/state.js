var models = require('../models');
var sequelize = require('../common/mysql');
var State = models.State;



exports.getStates = (query, cb) => {
	var languageID = query.languageID,
		apiType = query.apiType,
		apiVersion = query.apiVersion,
		pageNum = query.page,
		countryID = query.countryID,
		pageSize = query.pagesize;
		
	var offset = pageNum * pageSize;
	var limit = pageSize;	
		
	State.findAndCountAll({
		where: { stateStatus: "Active"},
		order: [['stateName', 'ASC']],
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
