var models = require('../models');
var sequelize = require('../common/mysql');
var AppUserRole = models.AppUserRole;



exports.getAppUserRoles = (query, cb) => {
	var languageID = query.languageID,
		apiType = query.apiType,
		apiVersion = query.apiVersion,
		pageNum = query.page,
		apputypeID = query.apputypeID,
		pageSize = query.pagesize;
		
	var offset = pageNum * pageSize;
	var limit = pageSize;	
	var searchName="1 =1";
    if (query.searchCondition && query.searchCondition !== '') {
        searchName = {'appuroleName': {$like:query.searchCondition+'%'}};
    } else {
        searchName = {'appuroleName': {$not: null}};
    }
    queryWhere = {
        $and: [
            {$or: [
                [searchName]
                ]}
        ]
    };
    	
	AppUserRole.findAndCountAll({
		where:  queryWhere,	//,
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
