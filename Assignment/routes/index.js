var express = require('express')
var app = express()

app.get('/', function (req, res) 
{
	res.render('index')
})

app.get('/home', function (req, res) 
{
	res.render('home')

})

app.post('/login', function (req, res) 
{
	var email = req.body.email;
	var password = req.body.password;

	req.getConnection(function (error, conn) 
	{
		conn.query('SELECT * FROM tbl_employee ORDER by salary ASC', function (err, rows) {
			res.render('index', {
				title: 'Assignment',
				data: rows
			})
		})
	})


})

app.get('/register', function (req, res) 
{
	res.render('register')

})

app.post('/register', function (req, res) 
{
	res.json(req.body)

})

// app.post('/all_user', function (req, res) {s

// 	req.getConnection(function (error, conn) {
// 		conn.query('SELECT * FROM tbl_employee ORDER by salary ASC', function (err, rows) {
// 			res.render('index', {
// 				title: 'Assignment',
// 				data: rows
// 			})
// 		})
// 	})
// });

// app.post('/get_salary', function (req, res) {
// 	let less_greater_than_salary = req.body.less_greater_than_salary;
// 	let less_than = req.body.less_than;
// 	let greater_than = req.body.greater_than;

// 	if (typeof less_than === "undefined") {
// 		req.getConnection(function (error, conn) {

// 			conn.query('SELECT * FROM `tbl_employee` WHERE salary >= ? ORDER by salary ASC', [less_greater_than_salary], function (err, rows) {
// 				res.render('index', {
// 					title: 'Assignment',
// 					data: rows
// 				})
// 			})
// 		})
// 	}
// 	else if (typeof greater_than === "undefined") {
// 		req.getConnection(function (error, conn) {
// 			conn.query('SELECT * FROM `tbl_employee` WHERE salary <= ? ORDER by salary ASC', [less_greater_than_salary], function (err, rows) {
// 				res.render('index', {
// 					title: 'Assignment',
// 					data: rows
// 				})
// 			})
// 		})
// 	}
// })
module.exports = app;
