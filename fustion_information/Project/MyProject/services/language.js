var models = require('../models');
var Language = models.Language;

exports.getLanguages = (query, cb) => {
    var languageID = query.languageID,
		apiType = query.apiType,
		apiVersion = query.apiVersion,
		pageNum = query.page,
		pageSize = query.pagesize;
		
	var offset = pageNum * pageSize;
    var limit = pageSize;
    var searchName = "1 =1";
    if (query.searchCondition && query.searchCondition !== '') {
        searchName = {'languageName': {$like:query.searchCondition+'%'}};
    } else {
        searchName = {'languageName': {$not: null}};
    }
    queryWhere = {
        $and: [
            {$or: [
                [searchName]
                ]}
        ]
    };

   Language.findAndCountAll({
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