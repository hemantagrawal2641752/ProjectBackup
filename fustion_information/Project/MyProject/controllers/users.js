var Students = require('../services').Students;
var Template = require('../services').Template;
var Userforgetpass = require('../services').Userforgetpass;
var config = require('../config');
var async = require('async');
var bcrypt = require('bcryptjs');
var nodemailer = require('nodemailer');
var isEqual = require('lodash.isequal');


exports.add = (req, res, next) => {
	var query = {};
	query.userDeviceID = req.body.userDeviceID;
	query.userDeviceType = req.body.userDeviceType;
	query.languageID = req.body.languageID;
	query.userEmail = req.body.userEmail;
	query.userFirstName = req.body.userFirstName;
	query.userLastName = req.body.userLastName;
	query.userGender = req.body.userGender;
	query.userMobile = req.body.userMobile;
	query.userPassword = bcrypt.hashSync(req.body.userPassword, 8); //req.body.userPassword;
	query.userCountryCode = req.body.userCountryCode;
	query.userProfilePicture = req.body.userProfilePicture;
	query.userOVerified = req.body.userOVerified;
	query.apputypeID = req.body.apputypeID;
	query.appuroleID = req.body.appuroleID;
	query.footbltypeID = req.body.footbltypeID;
	query.specialityID = req.body.specialityID;
	query.userReferKey = req.body.userReferKey;
	query.agegroupID = req.body.agegroupID;
	let buff = new Buffer.from(query.userEmail);
	let base64data = buff.toString('base64');
	//console.log(base64data);
	//process.exit();
	var result = Students.validateAPI(query);
	if (result == "") {
		Students.addUser(query, (ret) => {

			query.templateConstantCode = "42780";
			const key = Object.keys(query);

			Template.getTemplate(query, (ret2) => {
				console.log(ret2);
				var emailText = ret2.dataValues.templateEmailText;

				// var re = new RegExp(Object.keys(query).join("|"),"gi");
				// emailText = emailText.replace(re, function(matched){
				// return query[matched];
				// });


				emailText = emailText.split("###Receiver_userFirstName###").join(query.userFirstName);
				emailText = emailText.split("###Receiver_userLastName###").join(query.userLastName);
				emailText = emailText.split("###userOTP###").join(base64data);

				console.log(emailText);
				var transporter = nodemailer.createTransport({
					host: 'smtpout.secureserver.net',
					port: 465,
					secure: true,
					auth: {
						user: 'noreply@shreddersbay.com', //'testlast11@gmail.com',
						pass: '!2qwASzx' //'fipl3178'
					}
				});

				var mailOptions = {
					from: 'noreply@shreddersbay.com', // sender address
					to: query.userEmail, // ret.dataValues.userEmail, // list of receivers
					subject: ret2.dataValues.templateSubject, // Subject line
					html: emailText // plain text body
				};

				transporter.sendMail(mailOptions, function (err, info) {

					/*  if(err)
					console.log(err);
					else
					console.log(info);*/

				});
			});
			if (ret.userID > 0) {
				res.json({
					status: "true",
					data: ret,
					message: 'User registered successfully.'
				})
			} else {
				res.json({
					status: "false",
					data: ret.errors,
					message: ''
				})
			}
		});
	} else {
		res.json({
			status: "false",
			//data: ret,
			message: result
		});
	}
};

exports.login = (req, res, next) => {
	var query = {};
	query.languageID = req.body.languageID;
	query.apiType = req.body.apiType;
	query.apiVersion = req.body.apiVersion;
	query.userEmail = req.body.userEmail;
	query.userPassword = req.body.userPassword;
	var result = Students.validateAPI(query);
	if (result == "") {
		Students.validateLogin(query, (ret) => {
			//console.log(ret);
			//process.exit();
			if (ret != null) {
				if (ret.dataValues.userID > 0) {	//console.log(ret.dataValues.userPassword)		;
					//process.exit();
					var passwordIsValid = bcrypt.compareSync(req.body.userPassword, ret.dataValues.userPassword);
					if (!passwordIsValid) {
						res.json({
							status: "false",
							//data: ret,
							message: 'Please enter valid login details.'
						});
					}
					else {
						if (ret.dataValues.userOVerified != "Yes") {
							res.json({
								status: "false",
								//data: ret,
								message: 'Please make sure your account is verified.'
							});
						}
						if (ret.dataValues.userOVerified == "Yes") {
							res.json({
								status: "true",
								data: ret,
								message: 'User logged successfully.'
							});
						}
					}

				}
				else {
					res.json({
						status: "false",
						//data: ret,
						message: 'Please make sure your account is verified.'
					});
				}
			}
			else {
				res.json({
					status: "false",
					//data: ret,
					message: 'Please make sure your account is verified.'
				});
			}
		});
	}
	else {
		res.json({
			status: "false",
			//data: ret,
			message: result
		});
	}
};

exports.updateProfile = (req, res, next) => {
	var query = {};
	query.userDeviceID = req.body.userDeviceID;
	query.userDeviceType = req.body.userDeviceType;
	query.userEmail = req.body.userEmail;
	query.userFirstName = req.body.userFirstName;
	query.userLastName = req.body.userLastName;
	query.userMobile = req.body.userMobile;
	query.userCountryCode = req.body.userCountryCode;
	query.userProfilePicture = req.body.userProfilePicture;
	query.userGender = req.body.userGender;
	query.apputypeID = req.body.apputypeID;
	query.appuroleID = req.body.appuroleID;
	query.footbltypeID = req.body.footbltypeID;
	query.specialityID = req.body.specialityID;
	query.userReferKey = req.body.userReferKey;
	query.agegroupID = req.body.agegroupID;
	query.loginuserID = req.body.loginuserID;
	var result = Students.validateAPI(query);
	if (result == "") {
		Students.updateprofile(query, (ret) => {


			if (ret[0].dataValues.userID > 0) {
				res.json({
					status: "true",
					data: ret,
					message: 'Profile updated successfully.'
				})
			}
			else {
				res.json({
					status: "false",
					data: ret.errors,
					message: ''
				})
			}
		});
	}
	else {
		res.json({
			status: "false",
			//data: ret,
			message: result
		});
	}
};

exports.updateProfilePicture = (req, res, next) => {
	var query = {};
	query.userProfilePicture = req.body.userProfilePicture;
	query.loginuserID = req.body.loginuserID;
	var result = Students.validateAPI(query);
	if (result == "") {
		Students.updateprofilePicture(query, (ret) => {


			if (ret[0].dataValues.userID > 0) {
				res.json({
					status: "true",
					//data: ret,
					message: 'Profile picture updated successfully.'
				})
			}
			else {
				res.json({
					status: "false",
					data: ret.errors,
					message: ''
				})
			}
		});
	}
	else {
		res.json({
			status: "false",
			//data: ret,
			message: result
		});
	}
};

exports.updateSetttings = (req, res, next) => {
	var query = {};
	query.userNewsNotification = req.body.userNewsNotification;
	query.userCourseNotification = req.body.userCourseNotification;
	query.userOfferNotification = req.body.userOfferNotification;
	query.userExamNotification = req.body.userExamNotification;
	query.loginuserID = req.body.loginuserID;
	var result = Students.validateAPI(query);
	if (result == "") {

		Students.updatesettings(query, (ret) => {


			if (ret[0].dataValues.userID > 0) {
				res.json({
					status: "true",
					data: ret,
					message: 'Profile updated successfully.'
				})
			}
			else {
				res.json({
					status: "false",
					data: ret.errors,
					message: ''
				})
			}
		});
	}
	else {
		res.json({
			status: "false",
			//data: ret,
			message: result
		});
	}
};

exports.checkDuplicate = (req, res, next) => {
	var query = {};
	query.languageID = req.body.languageID;
	query.apiType = req.body.apiType;
	query.apiVersion = req.body.apiVersion;
	query.userEmail = req.body.userEmail;
	query.userMobile = req.body.userMobile;
	query.loginuserID = req.body.loginuserID;
	var result = Students.validateAPI(query);
	//console.log(result);
	//process.exit();
	if (result == "") {
		Students.checkduplicate(query, (ret) => {
			//console.log(ret.length)
			if (ret.length >= 0) {
				if (ret[0].dataValues.userID > 0 && ret[0].dataValues.userID == req.body.loginuserID) {
					res.json({
						status: "true",
						message: 'No user exists with this email or mobile.'
					});
				}
				if (ret[0].dataValues.userID > 0 && ret[0].dataValues.userID != req.body.loginuserID) {
					res.json({
						status: "false",
						message: 'User already exists with this email or mobile.'
					});
				}
			}
			else {
				res.json({
					status: "true",
					//data: ret,
					message: 'No user exists with this email or mobile.'
				});
			}
		});
	}
	else {
		res.json({
			status: "false",
			//data: ret,
			message: result
		});
	}
};

exports.forgotPassword = (req, res, next) => {
	var query = {};
	query.languageID = req.body.languageID;
	query.apiType = req.body.apiType;
	query.apiVersion = req.body.apiVersion;
	query.userEmail = req.body.userEmail;
	var result = Students.validateAPI(query);
	//console.log(result);
	//process.exit();
	if (result == "") {
		Students.forgotpass(query, (ret) => {
			if (ret != null) {
				var query = {};
				query.templateConstantCode = "471852";
				Template.getTemplate(query, (ret2) => {
					//console.log(ret2);
					var emailText = ret2.dataValues.templateEmailText;

					emailText = emailText.split("###Receiver_userFirstName###").join(query.userFirstName);
					emailText = emailText.split("###Receiver_userLastName###").join(query.userLastName);


					var transporter = nodemailer.createTransport({
						host: 'smtpout.secureserver.net',
						port: 465,
						secure: true,
						auth: {
							user: 'noreply@shreddersbay.com',//'testlast11@gmail.com',
							pass: '!2qwASzx'//'fipl3178'
						}
					});

					var mailOptions = {
						from: 'noreply@shreddersbay.com', // sender address
						to: "kamarjeetarani@gmail.com",// ret.dataValues.userEmail, // list of receivers
						subject: ret2.dataValues.templateSubject, // Subject line
						html: emailText// plain text body
					};

					transporter.sendMail(mailOptions, function (err, info) {

						/*  if(err)
							console.log(err);
						  else
							console.log(info);*/
					});


				});


				res.json({
					status: "true",
					message: 'Reset password instructions sent to you.'
				});

			}
			else {
				res.json({
					status: "true",
					message: 'Reset password instructions sent to you.'
				});
			}
		});
	}
	else {
		res.json({
			status: "false",
			//data: ret,
			message: result
		});
	}
};

exports.changePassword = (req, res, next) => {
	var query = {};

	query.languageID = req.body.languageID;
	query.apiType = req.body.apiType;
	query.apiVersion = req.body.apiVersion;
	query.loginuserID = req.body.loginuserID;
	query.userCurrentPassword = req.body.userCurrentPassword;
	query.userNewPassword = req.body.userNewPassword;
	query.userOldPassword = req.body.userOldPassword;
	query.userPassword = bcrypt.hashSync(req.body.userCurrentPassword, 8);
	//	console.log(req.body);
	//process.exit();
	var result = Students.validateAPI(query);

	if (result == "") {
		Students.getUserDetails(query, (ret) => {
			if (ret != null) {

				if (ret.dataValues.userID > 0) {	//console.log(ret.dataValues.userPassword)		;
					//process.exit();
					var passwordIsValid = bcrypt.compareSync(req.body.userNewPassword, ret.dataValues.userPassword);
					if (passwordIsValid) {
						res.json({
							status: "false",
							//data: ret,
							message: 'Old and new password can not be same.'
						});
					}
					else {
						Students.updatepassword(query, (ret2) => {
							if (ret2[0].dataValues.userID > 0) {
								res.json({
									status: "true",
									data: ret2,
									message: 'Password updated successfully.'
								})
							}
							else {
								res.json({
									status: "false",
									data: ret.errors,
									message: 'Please report this issue to support.'
								})
							}
						});
					}

				}

			}
			else {
				res.json({
					status: "true",
					message: 'Please make sure your account is verified.'
				});
			}
		});
	}
	else {
		res.json({
			status: "false",
			//data: ret,
			message: result
		});
	}
};

exports.verificationOTP = (req, res, next) => {
	var query = {};

	query.languageID = req.body.languageID;
	query.apiType = req.body.apiType;
	query.apiVersion = req.body.apiVersion;
	query.loginuserID = req.body.loginuserID;
	query.userOTP = req.body.userOTP;

	var result = Students.validateAPI(query);

	if (result == "") {
		Students.verificationotp(query, (ret) => {
			if (ret != null) {
				if (ret.dataValues.userID > 0) {
					var OTPIsValid = isEqual(req.body.userOTP, ret.dataValues.userOTP);
					if (OTPIsValid == false) {
						res.json({
							status: "false",
							//data: ret,
							message: 'OTP verification failed.'
						});
					}
					else {
						res.json({
							status: "true",
							//data: ret,
							message: 'OTP verified successfully.'
						});
					}

				}
			}
			else {
				res.json({
					status: "false",
					message: 'Please make sure your number is registered'
				});
			}
		});
	}

	else {
		res.json({
			status: "false",
			//data: ret,
			message: result
		});
	}

};

exports.loginWithMobile = (req, res, next) => {
	var query = {};
	query.languageID = req.body.languageID;
	query.apiType = req.body.apiType;
	query.apiVersion = req.body.apiVersion;
	query.userMobile = req.body.userMobile;
	query.userPassword = req.body.userPassword;
	var result = Students.validateAPI(query);
	if (result == "") {
		Students.loginWithNumber(query, (ret) => {
			//console.log(ret);
			//process.exit();
			if (ret != null) {
				if (ret.dataValues.userID > 0) {	//console.log(ret.dataValues.userPassword)		;
					//process.exit();
					var passwordIsValid = bcrypt.compareSync(req.body.userPassword, ret.dataValues.userPassword);
					if (!passwordIsValid) {
						res.json({
							status: "false",
							//data: ret,
							message: 'Please enter valid login details.'
						});
					}
					else {
						if (ret.dataValues.userOVerified != "Yes") {
							res.json({
								status: "false",
								//data: ret,
								message: 'Please make sure your mobile number is verified.'
							});
						}
						if (ret.dataValues.userOVerified == "Yes") {
							res.json({
								status: "true",
								data: ret,
								message: 'User logged successfully.'
							});
						}
					}

				}
				else {
					res.json({
						status: "false",
						//data: ret,
						message: 'Please make sure your account is verified.'
					});
				}
			}
			else {
				res.json({
					status: "false",
					//data: ret,
					message: 'Please make sure your account is verified.'
				});
			}
		});
	}
	else {
		res.json({
			status: "false",
			//data: ret,
			message: result
		});
	}
};

exports.forgotPasswordWithMobile = (req, res, next) => {
	var query = {};
	query.languageID = req.body.languageID;
	query.apiType = req.body.apiType;
	query.apiVersion = req.body.apiVersion;
	query.userMobile = req.body.userMobile;
	var result = Students.validateAPI(query);
	//console.log(result);
	//process.exit();
	if (result == "") {
		Students.forgotpasswithmobile(query, (ret) => {
			if (ret != null) {
				var query = {};
				query.templateConstantCode = "471852";
				Template.getTemplate(query, (ret2) => {
					//console.log(ret2);
					var smsText = ret2.dataValues.templateSMSText;

					smsText = smsText.split("###Receiver_userFirstName###").join(query.userFirstName);
					smsText = smsText.split("###Receiver_userLastName###").join(query.userLastName);

				});

				res.json({
					status: "true",
					message: 'Reset password instructions sent to you.'
				});

			}
			else {
				res.json({
					status: "false",
					message: 'Please make sure your number is registered'
				});
			}
		});
	}
	else {
		res.json({
			status: "false",
			//data: ret,
			message: result
		});
	}
};

exports.resendOTP = (req, res, next) => {
	var query = {};
	query.languageID = req.body.languageID;
	query.apiType = req.body.apiType;
	query.apiVersion = req.body.apiVersion;
	query.userEmail = req.body.userEmail;
	var result = Students.validateAPI(query);
	//console.log(result);
	//process.exit();
	if (result == "") {
		Students.resendotp(query, (ret) => {
			if (ret != null) {
				var query = {};
				query.templateConstantCode = "471852";
				Template.getTemplate(query, (ret2) => {
					//console.log(ret2);
					var emailText = ret2.dataValues.templateEmailText;

					emailText = emailText.split("###Receiver_userFirstName###").join(query.userFirstName);
					emailText = emailText.split("###Receiver_userLastName###").join(query.userLastName);

					var transporter = nodemailer.createTransport({
						host: 'smtpout.secureserver.net',
						port: 465,
						secure: true,
						auth: {
							user: 'noreply@shreddersbay.com',//'testlast11@gmail.com',
							pass: '!2qwASzx'//'fipl3178'
						}
					});

					var mailOptions = {
						from: 'noreply@shreddersbay.com', // sender address
						to: "kamarjeetarani@gmail.com",// ret.dataValues.userEmail, // list of receivers
						subject: ret2.dataValues.templateSubject, // Subject line
						html: emailText// plain text body
					};

					transporter.sendMail(mailOptions, function (err, info) {

						/*  if(err)
							console.log(err);
						  else
							console.log(info);*/
					});


				});
				res.json({
					status: "true",
					message: 'Reset password instructions sent to you.'
				});

			}
			else {
				res.json({
					status: "false",
					message: 'Please make sure your number is registered'
				});
			}
		});
	}
	else {
		res.json({
			status: "false",
			//data: ret,
			message: result
		});
	}
};

