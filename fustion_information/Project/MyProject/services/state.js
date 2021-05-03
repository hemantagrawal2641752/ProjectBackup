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
	var searchName ="1= 1";
    if (query.searchCondition && query.searchCondition !== '') {
        searchName = {'stateName': {$like:query.searchCondition+'%'}};
    } else {
        searchName = {'stateName': {$not: null}};
    }
    queryWhere = {
        $and: [
            {$or: [
                [searchName]
                ]}
        ]
    };
	State.findAndCountAll({
		where: queryWhere,//,
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
