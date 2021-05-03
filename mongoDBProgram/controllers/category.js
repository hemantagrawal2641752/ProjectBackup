var Category = require('../services').Category;

exports.add = (req, res, next) => {
    var query = {};
    query.categoryName = req.body.categoryName;

    Category.addcategory(query, (ret) => {
        if (ret) {
            res.json({
                status: "true",
                data: ret[0],
                message: 'Category added successfully.'
            })
        } else {
            res.json({
                status: "false",
                data: ret.errors,
                message: ''
            })
        }
    });

};


exports.categoryList = (req, res, next) => {

    Address.getCategory((ret) => {

        if (ret) {
            res.json({
                status: "true",
                data: ret

            })
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