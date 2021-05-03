var Exams = require('../services').Exams;
var config = require('../config');
var async = require('async');

exports.getExams = (req, res, next) => {
	
	var query = {};
	query.languageID = req.body.languageID;
	query.apiType = req.body.apiType;
	query.loginuserID = req.body.loginuserID;
	query.page = req.body.page;
	query.courseID = req.body.courseID;
	query.coursesubjID = req.body.coursesubjID;
	query.coursechapterIDs = req.body.coursechapterIDs;
	query.apiVersion = req.body.apiVersion;
   var myarr = [];
	Exams.getQuestions(query, (arr) => {
			if(arr)
			{
				myarr = arr;
			}
		Exams.getExamInfo(query, (ret) => {
			if (ret) {
					
						
				var data = {

					exams: ret,
					questions: myarr
					/*if(arr) {
					questions: arr	}
					else {
					questions: myarr}*/
					
					

				};
				res.json({
					status: "true",
					data: data,
					message: "Exam found."
				});

			} else {
				res.json({
					status: "false",
					data: ret.errors,
					message: ''
				})
			}
		});

	});
};

exports.getIndividualGroup = (req, res, next) => {
	var query = {};
	query.languageID = req.body.languageID;
	query.apiType = req.body.apiType;
	query.loginuserID = req.body.loginuserID;
	query.userexamID = req.body.userexamID;
	query.apiVersion = req.body.apiVersion;

	
		Exams.getIndividualVsGroup(query, (ret) => {
			if (ret) {

				
				res.json({
					status: "true",
					data: ret,
					message: "Exam found."
				});

			} else {
				res.json({
					status: "false",
					data: ret.errors,
					message: ''
				})
			}
		});

	
};
exports.getTimenAccuracy = (req, res, next) => {
	var query = {};
	query.languageID = req.body.languageID;
	query.apiType = req.body.apiType;
	query.loginuserID = req.body.loginuserID;
	query.userexamID = req.body.userexamID;
	query.apiVersion = req.body.apiVersion;

	
		Exams.getTimeAndAccuracy(query, (ret) => {
			if (ret) {

				
				res.json({
					status: "true",
					data: ret,
					message: "Exam found."
				});

			} else {
				res.json({
					status: "false",
					data: ret.errors,
					message: ''
				})
			}
		});

	
};

exports.getStrongnWeak = (req, res, next) => {
	var query = {};
	query.languageID = req.body.languageID;
	query.apiType = req.body.apiType;
	query.loginuserID = req.body.loginuserID;
	query.userexamID = req.body.userexamID;
	query.apiVersion = req.body.apiVersion;

	
		Exams.getgetStrongAndWeak(query, (ret) => {
			if (ret) {

				
				res.json({
					status: "true",
					data: ret,
					message: "Exam found."
				});

			} else {
				res.json({
					status: "false",
					data: ret.errors,
					message: ''
				})
			}
		});

	
};

exports.getResultSummary = (req, res, next) => {
	var query = {};
	query.languageID = req.body.languageID;
	query.apiType = req.body.apiType;
	query.loginuserID = req.body.loginuserID;
	query.userexamID = req.body.userexamID;
	query.apiVersion = req.body.apiVersion;

	
		Exams.getResult(query, (ret) => {
			if (ret) {

				
				res.json({
					status: "true",
					data: ret,
					message: "Exam found."
				});

			} else {
				res.json({
					status: "false",
					data: ret.errors,
					message: ''
				})
			}
		});

	
};

exports.getResultList = (req, res, next) => {
	var query = {};
	query.languageID = req.body.languageID;
	query.apiType = req.body.apiType;
	query.loginuserID = req.body.loginuserID;
	query.apiVersion = req.body.apiVersion;

	Exams.getResultInfo(query, (arr) => {
			
		Exams.getResultList(query, (ret) => {
			if (ret) {

				var data = {

					rank: arr,
					list: ret

				};
				res.json({
					status: "true",
					data: data,
					message: "Exam found."
				});

			} else {
				res.json({
					status: "false",
					data: ret.errors,
					message: ''
				})
			}
		});
});
	
};

exports.getPracticeLevelExams = (req, res, next) => {
	var query = {};
	query.languageID = req.body.languageID;
	query.apiType = req.body.apiType;
	query.loginuserID = req.body.loginuserID;
	query.courseID = req.body.courseID;
	query.coursesubjID = req.body.coursesubjID;
	query.coursechapterID = req.body.coursechapterID;
	query.apiVersion = req.body.apiVersion;

	Exams.getPracticeLevelExamsInfo(query, (arr) => {
		
		res.json({
					status: "true",
					data: arr,
					message: "Exam found."
				});		
		
});
	
};
exports.getPracticeLevelExamsQuestions = (req, res, next) => {
	var query = {};
	query.languageID = req.body.languageID;
	query.examName = req.body.examName;
	query.examTotalQs = req.body.examTotalQs;
	query.examCorrectAnswer = req.body.examCorrectAnswer;
	query.loginuserID = req.body.loginuserID;
	query.courseID = req.body.courseID;
	query.coursesubjID = req.body.coursesubjID;
	query.coursechapterIDs = req.body.coursechapterIDs;
	query.examQualifyingMarks = req.body.examQualifyingMarks;
	query.examQsL1 = req.body.examQsL1;
	query.examQsL2 = req.body.examQsL2;
	query.examQsL3 = req.body.examQsL3;
	query.examWrongAnswer = req.body.examWrongAnswer;

	Exams.getPracticeQuestions(query, (arr) => {
			
		res.json({
					status: "true",
					data: arr,
					message: "Exam found."
				});

	});
};