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

	var searchName = "1 = 1 ";

	if (query.searchCondition && query.searchCondition !== '') 
	{
        searchName = {'countryName': {$like:query.searchCondition+'%'}};
	} 
	else 
	{
        searchName = {'countryName': {$not: null}};
    }
    queryWhere = {
        $and: [
            {$or: [
                [searchName]
                ]}
        ]
    };		
	Country.findAndCountAll({
		where: queryWhere,
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