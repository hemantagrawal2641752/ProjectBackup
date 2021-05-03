
let express = require('express')
let bodyParser = require('body-parser');
let app = express()
app.use(bodyParser.json());

let msg = {};

app.get('/', function (req, res) 
{
    res.send({ "message": "Please Add api name after users/" });
});

app.post('/', function(req, res, next) 
{
	let user_id = req.body.user_id;
	
	req.getConnection(function(error, conn) 
	{
		
		if(user_id)
		{
			conn.query("SELECT * FROM tbl_users WHERE user_id = ?",user_id,function(err,result)
			{
				if(result.length > 0)
				{
                    conn.query("DELETE FROM `tbl_users` WHERE user_id = ?",[user_id],function(err,result)
                    {
                        msg['status']= true;
                        msg['message']="User deleted successfully";
                        msg['data']={};
                        res.json(msg)    
                    })
				}
				else
				{
					msg['status']= false;
					msg['message']="User not available";
					msg['data']={};
					res.json(msg)
				}
			})
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
