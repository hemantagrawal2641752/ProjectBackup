var Models = require('../models');
var faqCategory = Models.faqCategory;

exports.getfaqCategory = (query, cb) => {
    var languageID = query.languageID,
		apiType = query.apiType,
		apiVersion = query.apiVersion,
		pageNum = query.page,
		pageSize = query.pagesize;
		
	var offset = pageNum * pageSize;
    var limit = pageSize;
    
    faqCategory.findAndCountAll({
        where: { faqcategoryStatus: "Active" },
		order: [['faqcategoryName', 'ASC']],
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