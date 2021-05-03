var models = require('../models');
var JobType = models.JobType;

exports.getJobtypes = (query, cb) => {
    var languageID = query.languageID,
		apiType = query.apiType,
		apiVersion = query.apiVersion,
		pageNum = query.page,
		pageSize = query.pagesize;
		
	var offset = pageNum * pageSize;
    var limit = pageSize;
    var searchName= "1 =1";
    if (query.searchCondition && query.searchCondition !== '') {
        searchName = {'jobtypeName': {$like:query.searchCondition+'%'}};
    } else {
        searchName = {'jobtypeName': {$not: null}};
    }
    queryWhere = {
        $and: [
            {$or: [
                [searchName]
                ]}
        ]
    };

   JobType.findAndCountAll({
    where: queryWhere,
    offset,
    limit
    })
    .then((data) => {
        cb(data);
    })
    .catch((err) => {
        cb(data);
    });
};