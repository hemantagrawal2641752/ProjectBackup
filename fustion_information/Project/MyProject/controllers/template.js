var Template = require('../services').Template;
var config = require('../config');
var async = require('async');

exports.getTemplateByCode = (req, res, next) => {
	var query = {};
	query.templateConstantCode = req.body.templateConstantCode;
	Template.getTemplate(query, (ret) => {
		//console.log(ret);
		if(ret.dataValues.cmspageID > 0)
		{
			res.json({status: "true",
			data: ret,
			message: 'Template'})
		}
		else
		{
			res.json({status: "false",
			data: ret.errors,
			message: ''})
		}	
	});

};
