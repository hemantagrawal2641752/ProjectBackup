var Models = require('../models');
var Channel = Models.Channel;

exports.getChanneltype = (query, cb) => {
    var languageID = query.languageID,
		apiType = query.apiType,
		apiVersion = query.apiVersion,
		pageNum = query.page,
		pageSize = query.pagesize;
		
	var offset = pageNum * pageSize;
    var limit = pageSize;
    var searchName= "1 =1";
    if (query.searchCondition && query.searchCondition !== '') {
        searchName = {'chnltypeName': {$like:query.searchCondition+'%'}};
    } else {
        searchName = {'chnltypeName': {$not: null}};
    }
    queryWhere = {
        $and: [
            {$or: [
                [searchName]
                ]}
        ]
    };	
    Channel.findAndCountAll({
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