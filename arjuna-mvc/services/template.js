var models = require('../models');
var sequelize = require('../common/mysql');
const Sequelize = require('sequelize');
var Template = models.Template;


exports.getTemplate = (query, cb) => {
	//console.log(query);
	Template.findOne({
		where: { templateConstantCode: query.templateConstantCode	} 
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

