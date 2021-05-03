var Product = require('../services').Product;
var models = require('../model');
var Products = models.Product;

exports.add = (req, res, next) => {
    var query = {};
    query.categoryID = req.body.categoryID;
    query.productName = req.body.productName;
    Product.findProductName(query, (ret) => {
        if (ret.length > 0) {
            res.send({
                status: "false",
                message: 'ProductName already exists',
            })
        }
        else {
            Product.addproduct(query, (ret) => {
                if (ret) {

                    res.json({
                        status: "true",
                        message: 'Product added successfully.',
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

exports.productList = (req, res, next) => {

    let pageNo = parseInt(req.query.pageNo);
    let limit = parseInt(10);

    let startindex = (pageNo - 1) * limit;
    let endindex = pageNo * limit;

    Product.productList((ret) => {
        if (ret) {
            if (pageNo == 0) {
                res.send({
                    status: "true",
                    message: 'Products List',
                    data: ret
                })
            }
            else {
                let getProductsyList = ret.slice(startindex, endindex);
                res.send({
                    status: "true",
                    message: 'Products List',
                    Totalcount: ret.length,
                    data: getProductsyList
                })
            }
        }
        else {
            res.json({
                status: "false",
                data: ret.errors,
                message: 'Product data not found!'
            })
        }
    });
};

exports.Delete = (req, res, next) => {
    var query = {};
    query.productID = req.params.id;
    Product.deleteProduct(query, (ret) => {
        if (ret) {
            res.json({
                status: "true",
                message: 'Product Delete successfully.',
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


exports.findByproduct = (req, res, next) => {
    var query = {};
    query.productID = req.params.id;
    Product.findByproduct(query, (ret) => {
        if (ret) {
            res.send(ret)
        } else {
            res.json({
                status: "false",
                message: '',
                data: ret.errors,
            })
        }
    });
};

exports.findByProductyupdate = (req, res, next) => {
    var query = {};
    query._id = req.params.id;
    Product.findProductEditName(query._id, req.body, (ret) => {
        if (ret.length > 0) {
            res.send({
                status: "false",
                message: 'ProductName already exists',
            })
        }
        else {
            Products.findByIdAndUpdate(query, req.body
            ).then((data) => {
                if (data) {
                    res.json({
                        status: "true",
                        message: 'Product update successfully.',
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