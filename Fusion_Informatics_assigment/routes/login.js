
let express = require('express')
let bodyParser = require('body-parser');
let app = express();
app.use(bodyParser.json());
let jwt = require('jsonwebtoken');
let msg = {};
let md5 = require('md5');
const requestIp = require('request-ip');
app.use(requestIp.mw())

let dt = new Date();
let date_cu = `${
    (dt.getMonth() + 1).toString().padStart(2, '0')}/${
    dt.getDate().toString().padStart(2, '0')}/${
    dt.getFullYear().toString().padStart(4, '0')} ${
    dt.getHours().toString().padStart(2, '0')}:${
    dt.getMinutes().toString().padStart(2, '0')}:${
    dt.getSeconds().toString().padStart(2, '0')}`;

app.post('/', function (req, res, next) {
    let user_email = req.body.email;
    let user_password = req.body.password;

    if (user_email && user_password) {
        let reg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (reg.test(user_email) == false) {
            msg['status'] = false;
            msg['message'] = "Email not valid";
            msg['data'] = {};
            res.json(msg)
        }
        else {
            req.getConnection(function (error, conn) {
                conn.query("SELECT * FROM tbl_users WHERE email = ? AND password = ?", [user_email, md5(user_password)], function (err, result) {

                    let payload = {
                        Email: user_email,
                        Password: user_password
                    };

                    let token = jwt.sign({ payload }, 'my_secret_key');

                    if (result.length > 0) {
                        conn.query('UPDATE tbl_users SET token = ?,csv_email_id = ? WHERE email = ?', [token, user_email, user_email], function (err, result1) {
                            conn.query('SELECT * FROM tbl_login WHERE user_id = ?', [result[0].user_id], function (err, result2) {
                                const ip = req.clientIp;

                                if (result2.length > 0) {
                                    conn.query('UPDATE tbl_login SET user_id = ?,ip_address = ?,user_name = ?,nik_name = ?,last_login_time = ? WHERE user_id = ?', [result[0].user_id, ip, result[0].user_name, result[0].nic_name, date_cu, result[0].user_id], function (err, result1) {
                                        let NicName = {
                                            "nic_name": result[0].nic_name
                                        }

                                        msg['status'] = true;
                                        msg['message'] = "Login Successfully";
                                        msg['data'] = NicName;
                                        res.json(msg)
                                    });
                                }
                                else {
                                    conn.query('INSERT INTO `tbl_login`(`user_id`, `ip_address`, `user_name`, `nik_name`, `last_login_time`) VALUES (?,?,?,?,?)', [result[0].user_id, ip, result[0].user_name, result[0].nic_name, date_cu], function (err, result2) {
                                        let NicName = {
                                            "nic_name": result[0].nic_name
                                        }

                                        msg['status'] = true;
                                        msg['message'] = "Login Successfully";
                                        msg['data'] = NicName;
                                        res.json(msg)
                                    })
                                }
                            })
                        })
                    }
                    else {
                        msg['status'] = false;
                        msg['message'] = "Invalid User ID and Password";
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


