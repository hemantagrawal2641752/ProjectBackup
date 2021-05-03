var Models = require('../models');
var Academy = Models.Academy;

exports.getAcademies = (query, cb) => {
    var languageID = query.languageID,
		apiType = query.apiType,
		apiVersion = query.apiVersion,
		pageNum = query.page,
		pageSize = query.pagesize;
		
	var offset = pageNum * pageSize;
    var limit = pageSize;
    
    var searchName = " 1 =1 ";
    if (query.searchCondition && query.searchCondition !== '') {
        searchName = {'academyName': {$like:query.searchCondition+'%'}};
    } else  {
        searchName = {'academyName': {$not: null}};
    }
    queryWhere = {
        $and: [
            {$or: [
                [searchName]
                ]}
        ]
    };
    
    Academy.findAndCountAll({
        where:  queryWhere,	//,
		offset,
		limit
    })
    .then((data) =>{
        cb(data);
    })
    .catch((err) =>{
        cb(err);
    });

};