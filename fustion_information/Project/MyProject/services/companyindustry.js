var Models = require('../models');
var CompanyIndustry = Models.CompanyIndustry;

exports.getCompanies = (query, cb) => {
    var languageID = query.languageID,
		apiType = query.apiType,
		apiVersion = query.apiVersion,
		pageNum = query.page,
		pageSize = query.pagesize;
		
	var offset = pageNum * pageSize;
    var limit = pageSize;
    var searchName ="1= 1";
    if (query.searchCondition && query.searchCondition !== '') {
        searchName = {'compindName': {$like:query.searchCondition+'%'}};
    } else {
        searchName = {'compindName': {$not: null}};
    }
    queryWhere = {
        $and: [
            {$or: [
                [searchName]
                ]}
        ]
    };		
    CompanyIndustry.findAndCountAll({
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