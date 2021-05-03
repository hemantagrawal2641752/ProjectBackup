
let express = require('express')
let app = express();
let msg = {};

app.post('/', function (req, res, next) {
	req.getConnection(function (error, conn) {
		conn.query("SELECT * FROM tbl_users", function (err, result) {
			if (result.length > 0) {
				msg['status'] = true;
				msg['message'] = "Success";
				msg['data'] = result;
				res.json(msg)
			}
			else {
				msg['status'] = false;
				msg['message'] = "Users not available";
				msg['data'] = {};
				res.json(msg)
			}
		});
	});
})

module.exports = app
