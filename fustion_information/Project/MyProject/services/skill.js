var models = require('../models');
var Skill = models.Skill;

exports.getSkilllist = (query, cb) => {
    var languageID = query.languageID,
		apiType = query.apiType,
		apiVersion = query.apiVersion,
		pageNum = query.page,
		pageSize = query.pagesize;
		
	var offset = pageNum * pageSize;
    var limit = pageSize;
    var searchName = "1 =1";
    if (query.searchCondition && query.searchCondition !== '') {
        searchName = {'skillName': {$like:query.searchCondition+'%'}};
    } else {
        searchName = {'skillName': {$not: null}};
    }
    queryWhere = {
        $and: [
            {$or: [
                [searchName]
                ]}
        ]
    };

   Skill.findAndCountAll({
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