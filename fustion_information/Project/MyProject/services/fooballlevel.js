var Models = require('../models');
var FoobAllLevel = Models.FoobAllLevel;

exports.getFoobAllLevels = (query, cb) => {
    var languageID = query.languageID,
		apiType = query.apiType,
		apiVersion = query.apiVersion,
		pageNum = query.page,
		pageSize = query.pagesize;
		
	var offset = pageNum * pageSize;
    var limit = pageSize;
    var searchName ="1 =1";
    if (query.searchCondition && query.searchCondition !== '') {
        searchName = {'footbllevelName': {$like:query.searchCondition+'%'}};
    } else {
        searchName = {'footbllevelName': {$not: null}};
    }
    queryWhere = {
        $and: [
            {$or: [
                [searchName]
                ]}
        ]
    };		
    FoobAllLevel.findAndCountAll({
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