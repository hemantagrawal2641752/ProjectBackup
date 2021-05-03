var Userexamquestions = require('../services').Userexamquestions;
var config = require('../config');
var async = require('async');

exports.postAnswers = (req, res, next) => {
	var query = {};
	query.exams = req.body.exams;
	query.answers = req.body.answers;
	query.loginuserID = req.body.loginuserID;
	query.languageID = req.body.languageID;
	query.apiType = req.body.apiType;
	query.apiVersion = req.body.apiVersion;
	query.userexamID = req.body.userexamID;
	query.userexamTotalQs = req.body.userexamTotalQs;
	query.userexamQualifyingMarks = req.body.userexamQualifyingMarks;
	query.userexamCorrectAnswer = req.body.userexamCorrectAnswer;
	query.userexamWrongAnswer = req.body.userexamWrongAnswer;

	Userexamquestions.submitAnswers(query, (ret) => {			
			if(ret)
			{
				console.log(ret);
				res.json({data: ret, status: "true",message: "Answers submitted successfully."});
			}
			else
			{
				res.json({status: "false",
				data: ret.errors,
				message: ''})
			}	
		});

	
};
