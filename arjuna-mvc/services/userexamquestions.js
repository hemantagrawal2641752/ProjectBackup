var models = require('../models');
var sequelize = require('../common/mysql');
const Sequelize = require('sequelize');
var Userexamquestions = models.Userexamquestions;
var Userexams = models.Userexams;
var async = require('async');


exports.submitAnswers = (query, cb,next) => {
	var languageID = query.languageID,
		apiType = query.apiType,
		apiVersion = query.apiVersion,
		userexamCorrectAnswer = query.userexamCorrectAnswer,
		userexamQualifyingMarks = query.userexamQualifyingMarks,
		userexamID = query.userexamID,
		userexamWrongAnswer = query.userexamWrongAnswer,
		loginuserID = query.loginuserID,
		userexamTotalQs = query.userexamTotalQs,
		answers = query.answers,
		languageID = query.languageID;


	var queAnsweredCorrect, queMarks,totalMarks,userexamPercentage,userexamStatus,userexamAttempted,userexamCorrect,userexamIncorrect,userexamSkipped;
	userexamAttempted	=0;
	userexamCorrect	=0;
	userexamIncorrect	=0;
	userexamSkipped	=0;
	totalMarks = 0;
	
	
	query.answers.forEach(function(entry, index) {    
			
			if(entry.queAnswered==="Yes")
			{
				if(entry.queAnsweredOption !== entry.queCorrectAns)
				{
					queAnsweredCorrect = "No";
					queMarks = userexamWrongAnswer;
					totalMarks = totalMarks+queMarks;
					userexamIncorrect++;
					//console.log(entry.queAnsweredOption + " = " +entry.queCorrectAns);
				}	
				else
				{
					queAnsweredCorrect = "Yes";
					queMarks = userexamCorrectAnswer;
					totalMarks = totalMarks+ queMarks;
					userexamCorrect++;
				}
				userexamAttempted++;
			}
			else
			{
				queAnsweredCorrect = "No";
				queMarks = userexamWrongAnswer;
				totalMarks = totalMarks+queMarks;
				userexamIncorrect++;
			}				
			try {
		Userexamquestions.update({ queFlag : entry.queFlag, queReadTime: entry.queReadTime, queAnswered: entry.queAnswered, queAnsweredOption: entry.queAnsweredOption, queAnsweredCorrect:queAnsweredCorrect, queMarks:queMarks},{ where : { queID : entry.queID }});
			}
			catch (e) {console.log("entering and leaving the finally block");}
			finally {
  //console.log("entering and leaving the finally block");
}
    });
	next;
	console.log(totalMarks);
	console.log(userexamTotalQs);
	console.log(userexamCorrectAnswer);
	console.log(userexamAttempted);
	userexamPercentage = 0;
	userexamPercentage = (totalMarks*100) / (userexamTotalQs*userexamCorrectAnswer);
	userexamSkipped = userexamTotalQs-userexamAttempted;
	if(totalMarks<userexamQualifyingMarks)
	{
		userexamStatus = "Fail";
	}
	else
	{
		userexamStatus = "Pass";
	}
	
	var statement = "";
	//CALL `spUpateGradeRank`('6.67', '2', 'Fail', '3', '1', '2', '12', '2')
	statement =" CALL `spUpateGradeRank`('"+userexamPercentage+"', '"+totalMarks+"', '"+userexamStatus+"', '"+userexamAttempted+"', '"+userexamCorrect+"', '"+userexamIncorrect+"','"+userexamSkipped+"','"+userexamID+"');";
		
		/*sequelize.query(statement).then((data) => {	
		//cb(data);
		})*/

	/*var statement = "UPDATE userexams SET userexamMarks='"+totalMarks+"',userexamPercentage='"+userexamPercentage+"',userexamStatus='"+userexamStatus+"', userexamAttempted='"+userexamAttempted+"', userexamCorrect='"+userexamCorrect+"', userexamIncorrect='"+userexamIncorrect+"', userexamSkipped='"+userexamSkipped+"' where userexamID = "+userexamID;*/
	sequelize.query(statement).then((rows) => {
		
		cb(rows);
		
	});


		
};
