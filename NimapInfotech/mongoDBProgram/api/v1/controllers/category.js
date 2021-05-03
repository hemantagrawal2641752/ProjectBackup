var Category = require('../services').Category;
var models = require('../model');
var Categorys = models.Category;

exports.add = (req, res, next) => {
    var query = {};
    query.categoryName = req.body.categoryName;
    Category.findCategoryName(query, (ret) => {
        if (ret.length > 0) {
            res.send({
                status: "false",
                message: 'categoryName already exists',
            })
        }
        else {
            Category.addcategory(query, (ret) => {
                if (ret) {
                    res.json({
                        status: "true",
                        message: 'Category added successfully.',
                        data: ret[0],
                    })
                } else {
                    res.json({
                        status: "false",
                        message: '',
                        data: ret.errors,
                    })
                }
            });
        }
    });
};


exports.categoryList = (req, res, next) => {

    let pageNo = parseInt(req.query.pageNo);
    let limit = parseInt(10);

    let startindex = (pageNo - 1) * limit;
    let endindex = pageNo * limit;

    Category.getCategory((ret) => {
        if (ret) 
        {
            if(pageNo == 0)
            {
                res.send({
                    status: "true",
                    message: 'Category List',
                    data: ret
                })
            }
            else
            {
                let getCategoryList = ret.slice(startindex, endindex);
                res.send({
                    status: "true",
                    message: 'Category List',
                    Totalcount : ret.length,
                    data: getCategoryList
                })
            }
        }
        else {
            res.json({
                status: "false",
                data: ret.errors,
                message: 'Category data not found!'
            })
        }
    });
};

exports.Delete = (req, res, next) => {
    var query = {};
    query.categoryID = req.params.id;
    Category.deleteCategory(query, (ret) => {
        if (ret) {
            res.json({
                status: "true",
                message: 'Category Delete successfully.',
                data: ret[0],
            })
        } else {
            res.json({
                status: "false",
                message: '',
                data: ret.errors,
            })
        }
    });
};


exports.findByCategory = (req, res, next) => {
    var query = {};
    query.categoryID = req.params.id;
    Category.findByCategory(query, (ret) => {
        if (ret) {
            res.send(ret)
        }
        else {
            res.json({
                status: "false",
                message: '',
                data: ret.errors,
            })
        }
    });
};

exports.findByCategoryupdate = (req, res, next) => {
    var query = {};
    query._id = req.params.id;
    Category.findCategoryEditName(query._id, req.body, (ret) => {
        if (ret.length > 0) {
            res.send({
                status: "false",
                message: 'CategoryName already exists',
            })
        }
        else {
            Categorys.findByIdAndUpdate(query, {
                categoryName: req.body.categoryName
            }).then((data) => {
                if (data) {
                    res.json({
                        status: "true",
                        message: 'Category update successfully.',
                        data: {},
                    })
                }
                else {
                    res.json({
                        status: "false",
                        message: '',
                        data: data.errors,
                    })
                }
            }).catch((err) => {
                cb(err);
            })
        }
    })
};