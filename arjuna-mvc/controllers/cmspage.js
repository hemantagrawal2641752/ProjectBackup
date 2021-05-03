var Cmspage = require('../services').Cmspage;
var config = require('../config');
var async = require('async');

exports.getCmsPage = (req, res, next) => {
	var query = {};
	query.languageID = req.body.languageID;
	query.apiType = req.body.apiType;
	query.cmspageName = req.body.cmspageName;
	query.apiVersion = req.body.apiVersion;
	Cmspage.showCmspage(query, (ret) => {
		//console.log(ret);
		if(ret.dataValues.cmspageID > 0)
		{
			res.writeHead(200, {
        'Content-Type': 'text/html'
			});
			res.write(ret.dataValues.cmspageContents
			);
			 res.end();
		}
		else
		{
			res.json({status: "false",
			data: ret.errors,
			message: ''})
		}	
	});

};
