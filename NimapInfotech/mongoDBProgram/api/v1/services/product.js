
var models = require('../model');
var Product = models.Product;
var mongoose = require('mongoose')


exports.addproduct = (query, cb) => {
  var queryObj = {};
  queryObj.categoryID = query.categoryID;
  queryObj.productName = query.productName;
  Product.insertMany(queryObj).then((data) => {
    cb(data);
  }).catch((err) => {
    cb(err);
  })
}

exports.productList = (cb) => {
  Product.aggregate([
    {
      $lookup:
      {
        from: 'categories',
        localField: 'categoryID',
        foreignField: '_id',
        as: 'category'
      }
    }
  ]).then((data) => {
    cb(data);
  }).catch((err) => {
    cb(err);
  })
}

exports.deleteProduct = (query, cb) => {
  var queryObj = {};
  queryObj._id = query.productID;
  Product.findByIdAndRemove(queryObj).then((data) => {
    cb(data);
  }).catch((err) => {
    cb(err);
  })
}

exports.findProductName = (query, cb) => {
  Product.aggregate([
    {
      $match:
      {
        productName: query.productName
      }
    },
  ]).then((data) => {
    cb(data);
  }).catch((err) => {
    cb(err);
  })
}

exports.findProductEditName = (id, query, cb) => {
  Product.find(
    {
      "$and": [{
        "productName": query.productName
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

exports.findByproduct = (query, cb) => {
  var queryObj = {};
  Product.aggregate([
    {
      $match:
      {
        _id: mongoose.Types.ObjectId(query.productID)
      }
    },
    {
      $lookup:
      {
        from: 'categories',
        localField: 'categoryID',
        foreignField: '_id',
        as: 'category'
      }
    }
  ]).then((data) => {
    cb(data);
  }).catch((err) => {
    cb(err);
  })
}