
let express = require('express')
let bodyParser = require('body-parser');
let app = express();
app.use(bodyParser.json());
let msg = {};

let aestTime = new Date().toLocaleString("en-US", { timeZone: "Asia/Kolkata" });
let date = new Date(aestTime);
let month = (date.getMonth() + 1) > 9 ? (date.getMonth() + 1) : "0" + (date.getMonth() + 1);
let day = date.getDate() > 9 ? date.getDate() : "0" + date.getDate()
let hh = date.getHours() > 9 ? date.getHours() : "0" + date.getHours()
let mm = date.getMinutes() > 9 ? date.getMinutes() : "0" + date.getMinutes()
let ss = date.getSeconds() > 9 ? date.getSeconds() : "0" + date.getSeconds()

let fullDate = date.getFullYear() + '/' + month + "/" + day + ' ' + hh + ":" + mm + ":" + ss

let created_at = fullDate;


app.get('/', function (req, res) 
{
    res.send({ "message": "Please Add api name after users/" });
});

app.post('/', function(req, res, next) 
{
	let first_name = req.body.first_name; 
	let last_name = req.body.last_name;
    let user_email = req.body.user_email;
    let user_phone = req.body.user_phone;
	
	req.getConnection(function(error, conn) 
	{
        if(first_name,last_name,user_email,user_phone)
        {
            let reg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (reg.test(user_email) == false) 
            {
                msg['status']= false;
                msg['message']="Email not valid";
                msg['data']={};
                res.json(msg)
            }
            else
            {
                conn.query("SELECT * FROM tbl_users WHERE user_email = ?",[user_email],function(err,result3)
                {
                    if(result3.length > 0)
                    {
                        msg['status']= false;
                        msg['message']="Email already exists";
                        msg['data']={};
                        res.json(msg)
                    }
                    else
                    {
                        let filter = /^((\+[1-9]{1,4}[ \-]*)|(\([0-9]{2,3}\)[ \-]*)|([0-9]{2,4})[ \-]*)*?[0-9]{3,4}?[ \-]*[0-9]{3,4}?$/;

                        if(filter.test(user_phone) == false)
                        {
                            msg['status']= false;
                            msg['message']="Mobile number not valid";
                            msg['data']={};
                            res.json(msg)
                        }
                        else
                        {
                            conn.query("SELECT * FROM tbl_users WHERE user_phone = ?",[user_phone],function(err,result4)
                            {
                                if(result4.length > 0)
                                {
                                    msg['status']= false;
                                    msg['message']="Mobile number already exists";
                                    msg['data']={};
                                    res.json(msg)
                                }
                                else
                                {
                                    conn.query("INSERT INTO tbl_users(first_name,last_name,user_email,user_phone,created_at)VALUES(?,?,?,?,?)",[first_name,last_name,user_email,user_phone,created_at],function(err,result1)
                                    {
                                        
                                        msg['status']= true;
                                        msg['message']="New user created successfully";
                                        msg['data']={};
                                        res.json(msg)
                                        
                                    })
                                }
                            })
                        }
                    }
                })
            }
        }
        else
        {
            msg['status']= false;
            msg['message']="Please enter required parameters";
            msg['data']={};
            res.json(msg)
        }
        
	})
})

module.exports = app
