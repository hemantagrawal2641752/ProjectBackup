var models = require('../models');
var sequelize = require('../common/mysql');
var City = models.City;



exports.getCities = (query, cb) => {
	var languageID = query.languageID,
		apiType = query.apiType,
		apiVersion = query.apiVersion,
		pageNum = query.page,
		countryID = query.countryID,
		stateID = query.stateID,
		pageSize = query.pagesize;
		
	var offset = pageNum * pageSize;
	var limit = pageSize;	
	var searchName= "1= 1";
    if (query.searchCondition && query.searchCondition !== '') {
        searchName = {'cityName': {$like:query.searchCondition+'%'}};
    } else {
        searchName = {'cityName': {$not: null}};
    }
    queryWhere = {
        $and: [
            {$or: [
                [searchName]
                ]}
        ]
    };		
	City.findAndCountAll({
		where: [queryWhere, {countryID:countryID}, {stateID:stateID}] ,	//,
		//order: [['clubName', 'ASC']],
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
