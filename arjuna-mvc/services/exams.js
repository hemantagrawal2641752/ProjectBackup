var models = require('../models');
var sequelize = require('../common/mysql');
const Sequelize = require('sequelize');
var Exams = models.Exams;
var Userexams = models.Userexams;
var async = require('async');

exports.getQuestions = (query, cb) => {
	var languageID = query.languageID,
	apiType = query.apiType,
	apiVersion = query.apiVersion,
	pageNum = query.page,
	loginuserID = query.loginuserID,
	courseID = query.courseID,
	coursesubjID = query.coursesubjID,
	coursechapterIDs = query.coursechapterIDs,
	pageSize = query.pagesize;
	var offset = pageNum * pageSize;
	var limit = pageSize;
	
	var statement = "";
	if (!coursechapterIDs)
		statement = " CALL `spGetUserExamQues`(" + courseID + ", " + coursesubjID + ", '', " + loginuserID + ");";
	else
		statement = " CALL `spGetUserExamQues`(" + courseID + ", " + coursesubjID + ", " + coursechapterIDs + ", " + loginuserID + ");";
	console.log(statement)
	sequelize.query(statement).then((data) => {
		cb(data);
	})
};
exports.getPracticeQuestions = (query, cb) => {
	
	var languageID = query.languageID,
	examName = query.examName,
	examTotalQs = query.examTotalQs,
	examCorrectAnswer = query.examCorrectAnswer,
	loginuserID = query.loginuserID,
	courseID = query.courseID,
	coursesubjID = query.coursesubjID,
	coursechapterIDs = query.coursechapterIDs,	
	examQualifyingMarks = query.examQualifyingMarks,
	examQsL1 = query.examQsL1,
	examQsL2 = query.examQsL2,
	examQsL3 = query.examQsL3,	
	examWrongAnswer = query.examWrongAnswer;
	
	
	//$cmd = $db->createCommand("CALL spGetUserPracticeQue(:pUserID, :pCourseID,:pCoursesubjID, :pCoursechapterID, :pExamName, :pExamCorrectAnswer,:pExamWrongAnswer, :pexamTotalQs,:pExamQualifyingMarks, :pexamQsL1,:pexamQsL2, :pexamQsL3)") 
							 
	
	

	var statement = "";
	//if (!coursechapterIDs)
		statement = " CALL `spGetUserPracticeQue`(" + loginuserID + ", " + courseID + ","+coursesubjID+",'"+coursechapterIDs+"', '" + examName+"',"+examCorrectAnswer+","+ examWrongAnswer+","+ examTotalQs +","+ examQualifyingMarks+","+examQsL1+","+examQsL2+","+examQsL3+ ");";
	//else
	//	statement = " CALL `spGetUserPracticeQue`(" + courseID + ", " + coursesubjID + ", " + coursechapterIDs + ", " + loginuserID + ");";

console.log(statement);

	sequelize.query(statement).then((data) => {
		cb(data);
	})
};
exports.getExamInfo = (query, cb) => {
	var userId = query.loginuserID;
	var statement = "SELECT * FROM userexams where userID = " + userId + " order by userexamID DESC LIMIT 1";
	sequelize.query(statement).then((rows) => {

		cb(rows);

	});
};


exports.getIndividualVsGroup = (query, cb) => {
	var languageID = query.languageID,
	apiType = query.apiType,
	apiVersion = query.apiVersion,	
	userexamID = query.userexamID,
	loginuserID = query.loginuserID;

	var statement = "";
	
		statement = " CALL `spGenerateIndividualvsGroup`(" + loginuserID + ","+userexamID+ ");";

	sequelize.query(statement).then((data) => {
		cb(data);
	})
};
exports.getTimeAndAccuracy = (query, cb) => {
	var languageID = query.languageID,
	apiType = query.apiType,
	apiVersion = query.apiVersion,
	userexamID = query.userexamID,
	loginuserID = query.loginuserID;

	var statement = "";
	if (!userexamID)
		statement = " CALL `spAverageTimeAccuracy`(" + loginuserID + ");";
	else
		statement = " CALL `spAverageTimeAccuracy`(" + loginuserID + ", " + userexamID + ");";

	
		//statement = " CALL `spAverageTimeAccuracy`(" + loginuserID + ","++");";

	sequelize.query(statement).then((data) => {
		cb(data);
	})
};

exports.getgetStrongAndWeak = (query, cb) => {
	var languageID = query.languageID,
	apiType = query.apiType,
	apiVersion = query.apiVersion,
	userexamID = query.userexamID,
	loginuserID = query.loginuserID;

	var statement = "";
	if (!userexamID)
		statement = " CALL `spStrongWeekSections`(" + loginuserID + ");";
	else
		statement = " CALL `spStrongWeekSections`(" + loginuserID + ", " + userexamID + ");";

	
		//statement = " CALL `spAverageTimeAccuracy`(" + loginuserID + ","++");";

	sequelize.query(statement).then((data) => {
		cb(data);
	})
};

exports.getResult = (query, cb) => {
	var languageID = query.languageID,
	apiType = query.apiType,
	apiVersion = query.apiVersion,	
	userexamID = query.userexamID,
	loginuserID = query.loginuserID;

	var statement = "";
	
		statement = " CALL `spResultSummary`(" + loginuserID + ", " + userexamID +  ");";

	sequelize.query(statement).then((data) => {
		cb(data);
	})
};
exports.getResultList = (query, cb) => {
	var languageID = query.languageID,
	apiType = query.apiType,
	apiVersion = query.apiVersion,	
	loginuserID = query.loginuserID;

	var statement = "";
	
		statement = " CALL `spResultList`(" + loginuserID +  ");";

	sequelize.query(statement).then((data) => {
		cb(data);
	})
};
exports.getResultInfo = (query, cb) => {
	var languageID = query.languageID,
	apiType = query.apiType,
	apiVersion = query.apiVersion,	
	loginuserID = query.loginuserID;

	var statement = "";
	
		statement = " CALL `spResultInfo`(" + loginuserID +  ");";

	sequelize.query(statement).then((data) => {
		cb(data);
	})
};
exports.getPracticeLevelExamsInfo = (query, cb) => {
	var languageID = query.languageID,
	apiType = query.apiType,
	courseID = query.courseID,	
	coursesubjID = query.coursesubjID,	
	coursechapterID = query.coursechapterID,	
	apiVersion = query.apiVersion,	
	loginuserID = query.loginuserID;
	let date_ob = new Date();
	// current date
	// adjust 0 before single digit date
	let date = ("0" + date_ob.getDate()).slice(-2);
	// current month
	let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
	// current year
	let year = date_ob.getFullYear();
	// current hours
	let hours = date_ob.getHours();
	// current minutes
	let minutes = date_ob.getMinutes();
	// current seconds
	let seconds = date_ob.getSeconds();
	
	var statement = "SELECT count(queID) as questionCount FROM questions WHERE 1=1 ";
	if (courseID > 0) statement += " and courseID ='" + courseID + "'";
	if (coursesubjID > 0) statement += " and coursesubjID ='" + coursesubjID + "'";
	if (coursechapterID) statement += " and coursechapterID IN (" + coursechapterID + ")";
 
	sequelize.query(statement).then((data) => {
		
		 
			var string=JSON.stringify(data);
			
			var json =  JSON.parse(string);
			
		var outputRes = {};
		
			totalQs = json[0][0].questionCount;
			outputRes.examID = "0";
			outputRes.streamID = "";
			outputRes.coursestdID = "";
			outputRes.examType = "Practice";
			outputRes.courseID = courseID;
			outputRes.coursesubjID = coursesubjID;
			outputRes.coursechapterIDs = coursechapterID;
			outputRes.examName = "";
			outputRes.examContains = "";
			outputRes.examSections = "";
			outputRes.examDuration = "";
			outputRes.examStartDate = year + "-" + month + "-" + date;
			outputRes.examStartTime = hours + ":" + minutes + ":" + seconds;
			outputRes.examEndDate = year + "-" + month + "-" + date;
			outputRes.examEndTime = hours + ":" + minutes + ":" + seconds;
			outputRes.examQsL1SubID = "";			
			outputRes.examQsL2SubID = "";
			outputRes.examQsL3SubID = "";
			outputRes.examMaxAttempt = "";
			outputRes.examMaxDaysReschedule = "";
			outputRes.examCorrectAnswer = "2.00";
			outputRes.examWrongAnswer = "0.00";
			outputRes.examInstruction = "";
			outputRes.examStatus = "Active";
			if(courseID>0)
			{
				outputRes.examName="Practice Course: <courseName>";
				if(totalQs > 50)
					totalQs = 50;
			}
			if(coursesubjID>0)
			{
				outputRes.examName="Practice Course: <coursesubjName>";
				if(totalQs > 25)
					totalQs = 25;
			}
			if(coursechapterID>0)
			{
				outputRes.examName="Practice Course: <coursechapterName>";
				if(totalQs > 10)
					totalQs = 10;
			}
		
			outputRes.examTotalQs = totalQs;
			outputRes.examQsL1 = ((totalQs*50)/100);
			outputRes.examQsL2 = ((totalQs*30)/100);			
			outputRes.examQsL3 = totalQs - outputRes.examQsL1 - outputRes.examQsL2;			
			outputRes.examQualifyingMarks = ((totalQs*35)/50);
		
		
		//console.log(data); 
		cb(outputRes);
	});
	
};