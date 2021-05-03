var Models = require('../models');
var ADformat = Models.ADformat;

exports.getAdformats = (query, cb) => {
    var languageID = query.languageID,
		apiType = query.apiType,
		apiVersion = query.apiVersion,
		pageNum = query.page,
		pageSize = query.pagesize;
        adformatID = query.adformatID;

	var offset = pageNum * pageSize;
	var limit = pageSize;
	
	var searchName= " 1 =1 ";
    if (query.searchCondition && query.searchCondition !== '') {
        searchName = {'adformatName': {$like:query.searchCondition+'%'}};
    } else {
        searchName = {'adformatName': {$not: null}};
    }
    queryWhere = {
        $and: [
            {$or: [
                [searchName]
                ]}
        ]
    };

   ADformat.findAndCountAll ({
	where:  queryWhere,	//,
		offset,
		limit

   })
   .then((data) => {
	cb(data);

})
.catch((err) => {
	cb(err);
});

};