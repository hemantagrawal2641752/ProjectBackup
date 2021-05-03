var Models = require('../models');
var CompanyType = Models.CompanyType;

exports.getCompanytypes = (query, cb) => {
    var languageID = query.languageID,
		apiType = query.apiType,
		apiVersion = query.apiVersion,
		pageNum = query.page,
		pageSize = query.pagesize;
		
	var offset = pageNum * pageSize;
    var limit = pageSize;
    var searchName ="1 =1";
    if (query.searchCondition && query.searchCondition !== '') {
        searchName = {'comptypeName': {$like:query.searchCondition+'%'}};
    } else {
        searchName = {'comptypeName': {$not: null}};
    }
    queryWhere = {
        $and: [
            {$or: [
                [searchName]
                ]}
        ]
    };		
    CompanyType.findAndCountAll({
        where: queryWhere,
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