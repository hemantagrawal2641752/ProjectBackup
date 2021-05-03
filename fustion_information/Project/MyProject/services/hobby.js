var Models = require('../models');
var Hobby = Models.Hobby;

exports.gethobbies = (query, cb) => {
    var languageID = query.languageID,
		apiType = query.apiType,
		apiVersion = query.apiVersion,
		pageNum = query.page,
		pageSize = query.pagesize;
		
	var offset = pageNum * pageSize;
    var limit = pageSize;
    var searchName = "1 =1";
    if (query.searchCondition && query.searchCondition !== '') {
        searchName = {'hobbyName': {$like:query.searchCondition+'%'}};
    } else {
        searchName = {'hobbyName': {$not: null}};
    }
    queryWhere = {
        $and: [
            {$or: [
                [searchName]
                ]}
        ]
    };		
    Hobby.findAndCountAll({
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