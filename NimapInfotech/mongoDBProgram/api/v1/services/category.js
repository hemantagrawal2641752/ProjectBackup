
var models = require('../model');
var Category = models.Category;
var mongoose = require('mongoose')

exports.addcategory = (query, cb) => {
    var queryObj = {};
    queryObj.categoryName = query.categoryName;
    Category.insertMany(queryObj).then((data) => {
        cb(data);
    }).catch((err) => {
        cb(err);
    })
}

exports.findCategoryEditName = (id, query, cb) => {
    Category.find(
        {
            "$and": [{
                "categoryName": query.categoryName
            }, {
                "_id": { "$ne": mongoose.Types.ObjectId(id) }
            }]
        }
    ).then((data) => {
        console.log(data)
        cb(data);
    }).catch((err) => {
        cb(err);
    })
}

exports.findCategoryName = (query, cb) => {
    Category.aggregate([
        {
            $match:
            {
                categoryName: query.categoryName
            }
        },
    ]).then((data) => {
        cb(data);
    }).catch((err) => {
        cb(err);
    })
}

exports.getCategory = (cb) => {
    Category.find().then((data) => {
        cb(data);
    }).catch((err) => {
        cb(err);
    })
}

exports.deleteCategory = (query, cb) => {
    var queryObj = {};
    queryObj._id = query.categoryID;
    Category.findByIdAndRemove(queryObj).then((data) => {
        cb(data);
    }).catch((err) => {
        cb(err);
    })
}

exports.findByCategory = (query, cb) => {
    var queryObj = {};
    queryObj._id = query.categoryID;
    Category.findById(queryObj).then((data) => {
        cb(data);
    }).catch((err) => {
        cb(err);
    })
}


