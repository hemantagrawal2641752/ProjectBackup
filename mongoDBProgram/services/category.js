
var models = require('../model');
var Category = models.Category;

exports.addcategory = (query, cb) => {
	var queryObj = {};
    queryObj.categoryName = req.body.categoryName;

    Category.insertMany(queryObj).then((data) => 
        {
            cb(data);
        }).catch((err) => 
        {
            cb(err);
        })
}

exports.getCategory = (cb) => {
	
    Category.find().then((data) => 
        {
            cb(data);
        }).catch((err) => 
        {
            cb(err);
        })
}

