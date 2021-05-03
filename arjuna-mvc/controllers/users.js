var Students = require('../services').Students;
var Template = require('../services').Template;
var Userforgetpass = require('../services').Userforgetpass;
var config = require('../config');
var async = require('async');
var bcrypt = require('bcryptjs');
var nodemailer = require('nodemailer');

exports.add = (req, res, next) => {
	var query = {};
	query.userDeviceID = req.body.userDeviceID;
	query.userDeviceType = req.body.userDeviceType;
	query.userEmail = req.body.userEmail;
	query.userFullName = req.body.userFullName;
	query.userMobile = req.body.userMobile;
	query.userPassword = bcrypt.hashSync(req.body.userPassword, 8); //req.body.userPassword;
	query.userCountryCode = req.body.userCountryCode;
	query.userProfilePicture = req.body.userProfilePicture;
	query.userBirthDate = req.body.userBirthDate;
	let buff = new Buffer.from(query.userEmail);
	let base64data = buff.toString('base64');
	//console.log(base64data);
	//process.exit();
	var result = Students.validateAPI(query);
	if (result == "") {
		Students.addUser(query, (ret) => {
			
			query.templateConstantCode = "1";
			Template.getTemplate(query, (ret2) => {
						console.log(ret2);
						var emailText = ret2.dataValues.templateEmailText;
							
						
	

						emailText = emailText.split("###Name###").join(query.userFullName);
						emailText = emailText.split("###code###").join(base64data);

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
				if (ret.dataValues.userID > 0) { //console.log(ret.dataValues.userPassword)		;
					//process.exit();
					var passwordIsValid = bcrypt.compareSync(req.body.userPassword, ret.dataValues.userPassword);
					if (!passwordIsValid) {
						res.json({
							status: "false",
							//data: ret,
							message: 'Please enter valid login details.'
						});
					} else {
						if (ret.dataValues.userSignupOTPVerified !== "Yes") {
							res.json({
								status: "false",
								//data: ret,
								message: 'Please make sure your account is verified.'
							});
						}
						if (ret.dataValues.userSignupOTPVerified === "Yes") {
							res.json({
								status: "true",
								data: ret,
								message: 'User logged successfully.'
							});
						}
					}

				} else {
					res.json({
						status: "false",
						//data: ret,
						message: 'Please make sure your account is verified.'
					});
				}
			} else {
				res.json({
					status: "false",
					//data: ret,
					message: 'Please make sure your account is verified.'
				});
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

exports.updateProfile = (req, res, next) => {
	var query = {};
	query.userDeviceID = req.body.userDeviceID;
	query.userDeviceType = req.body.userDeviceType;
	query.userEmail = req.body.userEmail;
	query.userFullName = req.body.userFullName;
	query.userMobile = req.body.userMobile;
	query.userPassword = req.body.userPassword;
	query.userCountryCode = req.body.userCountryCode;
	query.userProfilePicture = req.body.userProfilePicture;
	query.userBirthDate = req.body.userBirthDate;
	query.userGender = req.body.userGender;
	query.userHobbies = req.body.userHobbies;
	query.userInterest = req.body.userInterest;
	query.userAddress = req.body.userAddress;
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
			} else {
				res.json({
					status: "true",
					//data: ret,
					message: 'No user exists with this email or mobile.'
				});
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

exports.forgotPassword = (req, res, next) => {
	var query = {};
	var date = new Date();
	query.languageID = req.body.languageID;
	query.apiType = req.body.apiType;
	query.apiVersion = req.body.apiVersion;
	query.userEmail = req.body.userEmail;

	/*token*/
	var token = Students.makeCode(15);
	//console.log(token);
	var result = Students.validateAPI(query);
	//console.log(result);
	//process.exit();
	if (result == "") {
		Students.forgotpass(query, (ret) => {
			if (ret != null) {
				var query = {};

				var queryObj = {};
				queryObj.userID = ret.dataValues.userID;
				queryObj.userforgetpassResetCode = token;
				queryObj.userforgetpassResetCodeExp = date.setDate(date.getDate() + 1);

				Userforgetpass.createForgotRequest(queryObj, (ret3) => {

					query.templateConstantCode = "3";

					Template.getTemplate(query, (ret2) => {
						//console.log(ret2);
						var emailText = ret2.dataValues.templateEmailText;

						//<h3 style="font-size: 32px; color: #1f1f1f; margin-bottom: 0; padding-left: 25px;">Dear ###Name###,</h3>
						//<p style="font-size: 22px; color: #454545; margin-top: 10px; padding-left: 25px;">Forgot Your Password? Don't Worry, You can Reset it from Here! - click below and we will !</p>
						//<p style="font-size: 15px; color: #454545; margin-top: 10px; padding-left: 25px;"><a href="http://13.235.206.122:3006/reset/###userID###/###code###">Please reset your password by clicking here</a></p>


						emailText = emailText.split("###Name###").join(ret.dataValues.userFullName);
						//emailText = emailText.split("###userID###").join(ret.dataValues.userID);
						emailText = emailText.split("###code###").join(token);

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
							to: ret.dataValues.userEmail,// ret.dataValues.userEmail, // list of receivers
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

					res.json({
						status: "true",
						message: 'Reset password instructions sent to you.'
					});
				});
			} else {
				res.json({
					status: "true",
					message: 'Reset password instructions sent to you.'
				});
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

exports.changePassword = (req, res, next) => {
	var query = {};

	query.languageID = req.body.languageID;
	query.apiType = req.body.apiType;
	query.apiVersion = req.body.apiVersion;
	query.loginuserID = req.body.loginuserID;
	query.userCurrentPassword = req.body.userCurrentPassword;
	query.userNewPassword = req.body.userNewPassword;
	query.userOldPassword = req.body.userOldPassword;
	query.userPassword = bcrypt.hashSync(req.body.userNewPassword, 8);
	//	console.log(req.body);
	//process.exit();
	var result = Students.validateAPI(query);

	if (result == "") {
		Students.getUserDetails(query, (ret) => {
			if (ret != null) {

				if (ret.dataValues.userID > 0) { //console.log(ret.dataValues.userPassword)		;
					//process.exit();
					var passwordIsValid = bcrypt.compareSync(req.body.userNewPassword, ret.dataValues.userPassword);
					if (passwordIsValid) {
						res.json({
							status: "false",
							//data: ret,
							message: 'Old and new password can not be same.'
						});
					} else {
						Students.updatepassword(query, (ret2) => {
							if (ret2[0].dataValues.userID > 0) {
								res.json({
									status: "true",
									data: ret2,
									message: 'Profile picture updated successfully.'
								})
							} else {
								res.json({
									status: "false",
									data: ret.errors,
									message: 'Please report this issue to support.'
								})
							}
						});
					}

				}

			} else {
				res.json({
					status: "true",
					message: 'Please make sure your account is verified.'
				});
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

exports.verifyAccount = (req, res, next) => {
	var query = {};
	query.languageID = req.body.languageID;
	query.apiType = req.body.apiType;
	query.apiVersion = req.body.apiVersion;
	query.userEmail = req.body.userEmail;
	//console.log(query);
	//process.exit();
	var result = Students.validateAPI(query);
	//console.log(result);
	//process.exit();
	if (result == "") {
		Students.activateAccount(query, (ret) => {
			//console.log(ret.length)
			if (ret.length >= 0) {
				res.json({
							status: "true",
							data: ret,
							message: 'Account verified successfully.'
						})
			} else {
				res.json({
					status: "true",
					//data: ret,
					message: 'No user exists with this email or mobile.'
				});
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

exports.verifyForgetRequest = (req, res, next) => {
	var query = {};
	query.languageID = req.body.languageID;
	query.apiType = req.body.apiType;
	query.apiVersion = req.body.apiVersion;
	query.userforgetpassResetCode = req.body.userforgetpassResetCode;
 
		Userforgetpass.verifyForgotRequestCode(query, (ret) => {
			console.log(ret);
			if (ret) {
				res.json({
							status: "true",
							data: ret,
							message: 'Account verified successfully.'
						})
			} else {
				res.json({
					status: "false",
					//data: ret,
					message: 'Please check the code, it may be wrong or code is expired.'
				});
			}
		});
	
};

exports.resetPassword = (req, res, next) => {
	var query = {};

	query.languageID = req.body.languageID;
	query.apiType = req.body.apiType;
	query.apiVersion = req.body.apiVersion;
	query.loginuserID = req.body.loginuserID;
	query.userPassword = bcrypt.hashSync(req.body.userNewPassword, 8);
	//	console.log(req.body);
	//process.exit();
	var result = Students.validateAPI(query);

	if (result == "") {
		Students.getUserDetails(query, (ret) => {
			if (ret != null) {

				Students.updatepassword(query, (ret2) => {
							if (ret2[0].dataValues.userID > 0) {
								res.json({
									status: "true",
									data: ret2,
									message: 'Profile picture updated successfully.'
								})
							} else {
								res.json({
									status: "false",
									data: ret.errors,
									message: 'Please report this issue to support.'
								})
							}
						});

			} else {
				res.json({
					status: "true",
					message: 'Please make sure your account is verified.'
				});
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