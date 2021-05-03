var Institute = require('../services').Institute;
var config = require('../config');
var async = require('async');

exports.list = (req, res, next) => {
	var query = {};
	query.languageID = req.body.languageID;
	query.apiType = req.body.apiType;
	query.apiVersion = req.body.apiVersion;
	var pageNum = query.page = req.body.page;
	var pageSize = query.pagesize = req.body.pagesize || 10;
	//console.log(req.body);
	//process.exit();
	async.series({
		total: (cb) => {
			Institute.instituteTotalCount(query, (rows) => {
				cb(null, rows[0].totalCount);
				
			});
		},
		list: (cb) => {
			Institute.allInstituteQuery(query, (rows) => {
				cb(null, rows[0])
			});
		}

	}, (err, ret) => {
		console.log(ret.total);
		console.log(err);
		var totalCount = ret.total;
		var totalPage = totalCount % pageSize == 0 ? totalCount / pageSize : Math.ceil(totalCount / pageSize);
		var data = {
			status: "true",
			data: ret.list,
			mtotalCount: totalCount,
			pageNum: pageNum,
			pageSize: pageSize,
			totalPage: totalPage
		};
		res.json(data);
	});

};
