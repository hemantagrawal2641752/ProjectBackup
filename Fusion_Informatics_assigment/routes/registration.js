
let express = require('express')
let app = express()
let fs = require("fs");
const mime = require('mime');
let msg = {};
var md5 = require('md5');


var dt = new Date();
var date_cu = `${
	(dt.getMonth() + 1).toString().padStart(2, '0')}/${
	dt.getDate().toString().padStart(2, '0')}/${
	dt.getFullYear().toString().padStart(4, '0')} ${
	dt.getHours().toString().padStart(2, '0')}:${
	dt.getMinutes().toString().padStart(2, '0')}:${
	dt.getSeconds().toString().padStart(2, '0')}`;


app.post('/', function (req, res, next) {
	let State = req.body.state;
	let City = req.body.city;
	let Hobbies = req.body.hobbies;
	let Gender = req.body.gender;
	let User_image = req.body.user_image;
	let User_name = req.body.user_name;
	let Mobile = req.body.mobile;
	let Email = req.body.email;
	let Nik_name = req.body.nik_name;
	let Password = req.body.password;

	if (State && City && Hobbies && Gender && User_image && User_name && Mobile && Email && Nik_name && Password) {
		if (isNaN(State)) {
			if (isNaN(City)) {
				if (isNaN(Gender)) {
					if (isNaN(User_name)) {
						let filter = /^((\+[1-9]{1,4}[ \-]*)|(\([0-9]{2,3}\)[ \-]*)|([0-9]{2,4})[ \-]*)*?[0-9]{3,4}?[ \-]*[0-9]{3,4}?$/;
						if (filter.test(Mobile) == false) {
							msg['status'] = false;
							msg['message'] = "Mobile number not valid";
							msg['data'] = {};
							res.json(msg)
						}
						else {
							let reg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

							if (reg.test(Email) == false) {
								msg['status'] = false;
								msg['message'] = "Email not valid";
								msg['data'] = {};
								res.json(msg);
							}
							else {
								var re = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
								if (re.test(Password)) {
									req.getConnection(function (error, conn) {
										conn.query("SELECT * FROM tbl_users WHERE email = ?", Email, function (err, result3) {
											if (result3.length > 0) {
												msg['status'] = false;
												msg['message'] = "Email id already exists";
												msg['data'] = {};
												res.json(msg)
											}
											else {
												conn.query("SELECT * from tbl_users WHERE mobile_number= ?", [Mobile], function (err, result4) {
													if (result4.length > 0) {
														msg['status'] = false;
														msg['message'] = "Mobile number already exists";
														msg['data'] = {};
														res.json(msg)
													}
													else {
														var matches = User_image.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/), response = {};
														response.type = matches[1];
														response.data = new Buffer(matches[2], 'base64');
														let decodedImg = response;
														let imageBuffer = decodedImg.data;
														let type = decodedImg.type;
														let extension = defaultExt = mime.getExtension(type);
														let fileName = Date.now() + "." + extension;
														fs.writeFileSync("./images/" + fileName, imageBuffer, 'utf8');

														var query = conn.query("INSERT INTO `tbl_users`(`user_name`, `city`, `state`, `hobbies`, `gender`, `user_Image`, `nic_name`, `mobile_number`, `email`, `password`, `created_at`) VALUES (?,?,?,?,?,?,?,?,?,?,?)", [User_name, City, State, Hobbies, Gender, fileName, Nik_name, Mobile, Email, md5(Password), date_cu], function (err, result5) {
															console.log(query.sql)
															msg['status'] = true;
															msg['message'] = "You have registered successfully.";
															msg['data'] = {};
															res.json(msg)
														})
													}
												});
											}
										});
									});
								}
								else {
									msg['status'] = false;
									msg['message'] = "The string must contain at least 1 lowercase alphabetic character AND 1 uppercase alphabetic character AND 1 numeric character AND  least 1 special character, but we are escaping reserved RegEx characters to avoid conflict AND 8 characters or longer";
									msg['data'] = {};
									res.json(msg);
								}
							}
						}
					}
					else {
						msg['status'] = false;
						msg['message'] = "The user name must be the string";
						msg['data'] = {};
						res.json(msg)
					}
				}
				else {
					msg['status'] = false;
					msg['message'] = "The Gender name must be the string";
					msg['data'] = {};
					res.json(msg)
				}
			}
			else {
				msg['status'] = false;
				msg['message'] = "The City name must be The string";
				msg['data'] = {};
				res.json(msg)
			}
		}
		else {
			msg['status'] = false;
			msg['message'] = "The State name must be The string";
			msg['data'] = {};
			res.json(msg)
		}
	}
	else {
		msg['status'] = false;
		msg['message'] = "Please enter required parameters";
		msg['data'] = {};
		res.json(msg)
	}
});

module.exports = app;



