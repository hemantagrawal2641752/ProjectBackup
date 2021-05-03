var models = require('../models');
var sequelize = require('../common/mysql');
const Sequelize = require('sequelize');
var Cmspage = models.Cmspage;


exports.showCmspage = (query, cb) => {
	//console.log(query);
	Cmspage.findOne({
		where: { cmspageName: query.cmspageName	} 
		})
		.then((data) => 
		{
			//console.log(data);
			cb(data);
		})
		.catch((err) => {
			cb(err);
	});
};

