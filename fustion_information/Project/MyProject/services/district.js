var models = require('../models');
var sequelize = require('../common/mysql');
var District = models.District;

exports.getDistrict = (query, cb) => {
	
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
        searchName = {'districtName': {$like:query.searchCondition+'%'}};
	} 
	else 
	{
        searchName = {'districtName': {$not: null}};
    }
    queryWhere = {
        $and: [
            {$or: [
                [searchName]
                ]}
        ]
    };		
	District.findAndCountAll({
		where: queryWhere,
        offset,
        limit
		})
		.then((data) => 
		{
			cb(data);
		})
		.catch((err) => {
			cb(err);
	});
};