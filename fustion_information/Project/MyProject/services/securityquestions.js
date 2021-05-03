var models = require('../models');
var SecurityQuestions = models.SecurityQuestions;

exports.getSecurityQuestions = (query, cb) => {
    var languageID = query.languageID,
		apiType = query.apiType,
		apiVersion = query.apiVersion,
		pageNum = query.page,
		pageSize = query.pagesize;
		
	var offset = pageNum * pageSize;
    var limit = pageSize;
    var searchName = "1 =1";
    if (query.searchCondition && query.searchCondition !== '') {
        searchName = {'secquestionName': {$like:query.searchCondition+'%'}};
    } else {
        searchName = {'secquestionName': {$not: null}};
    }
    queryWhere = {
        $and: [
            {$or: [
                [searchName]
                ]}
        ]
    };

   SecurityQuestions.findAndCountAll({
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