var models = require('../models');
var Reasons = models.Reasons;

exports.getReasonslist = (query, cb) => {
    var languageID = query.languageID,
		apiType = query.apiType,
		apiVersion = query.apiVersion,
		pageNum = query.page,
		pageSize = query.pagesize;
		
	var offset = pageNum * pageSize;
    var limit = pageSize;
    var searchName = "1 =1";
    if (query.searchCondition && query.searchCondition !== '') {
        searchName = {'reasonName': {$like:query.searchCondition+'%'}};
    } else {
        searchName = {'reasonName': {$not: null}};
    }
    queryWhere = {
        $and: [
            {$or: [
                [searchName]
                ]}
        ]
    };

   Reasons.findAndCountAll({
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