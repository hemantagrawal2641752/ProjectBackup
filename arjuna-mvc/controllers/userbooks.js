var Userbooks = require('../services').Userbooks;
var config = require('../config');
var async = require('async');

exports.buyBook = (req, res, next) => {
	var query = {};
		query.userID= req.body.loginuserID;
		query.courseID= req.body.courseID;
		query.userbookPurchaseAmount= req.body.userbookPurchaseAmount;
		
		Userbooks.purchaseBook(query, (ret) => {

		if(ret.userbookID > 0)
		{
			res.json({
			status: "true",
			data: ret,
			message: 'Course purchased successfully.'
			})
		}
		else
		{
			res.json({status: "false",
			data: ret.errors,
			message: ''})
		}		
	});
	
};

exports.myBoooks = (req, res, next) => {
	var query = {};
	query.languageID = req.body.languageID;
	query.apiType = req.body.apiType;
	query.apiVersion = req.body.apiVersion;
	query.userID = req.body.loginuserID;

	Userbooks.bookList(query, (ret) => {
		//console.log(ret);
		//process.exit();
		if(ret)
		{
			
			res.json({
			status: "true",
			data: ret[0],
			message: 'Purchase list found.'
			})
		}
		else
		{
			res.json({status: "false",
			data: ret.errors,
			message: ''})
		}
		});

};
