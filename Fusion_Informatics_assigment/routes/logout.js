
let express = require('express')
let app = express();
let msg = {};
var dt = new Date();
var date_cu = `${
    (dt.getMonth() + 1).toString().padStart(2, '0')}/${
    dt.getDate().toString().padStart(2, '0')}/${
    dt.getFullYear().toString().padStart(4, '0')} ${
    dt.getHours().toString().padStart(2, '0')}:${
    dt.getMinutes().toString().padStart(2, '0')}:${
    dt.getSeconds().toString().padStart(2, '0')}`;


app.post('/', function (req, res, next) {
    var user_email = req.body.email;

    if (user_email) {
        let reg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (reg.test(user_email) == false) {
            msg['status'] = false;
            msg['message'] = "Email not valid";
            msg['data'] = {};
            res.json(msg)
        }
        else {
            req.getConnection(function (error, conn) {
                conn.query("SELECT * FROM tbl_users WHERE email = ?", [user_email], function (err, result) {
                    if (result.length > 0) {
                        conn.query('UPDATE tbl_users SET token = "" WHERE email = ?', [user_email], function (err, result1) {
                            conn.query('UPDATE tbl_login SET last_logout_time = ? WHERE user_id = ?', [date_cu, result[0].user_id], function (err, result1) {
                                msg['status'] = true;
                                msg['message'] = "Logout Successfully";
                                msg['data'] = {};
                                res.json(msg)
                            });
                        })
                    }
                    else {
                        msg['status'] = false;
                        msg['message'] = "Invalid email id";
                        msg['data'] = {};
                        res.json(msg)
                    }
                });
            });
        }
    }
    else {
        msg['status'] = false;
        msg['message'] = "Please enter required parameters";
        msg['data'] = {};
        res.json(msg)
    }
})

module.exports = app
