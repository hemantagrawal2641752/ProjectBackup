let express = require('express')
let app = express()
let msg = {};
app.post('/', function(req, res) 
{
	req.getConnection(function(err, connection) 
	{
		connection.query("select * from tbl_users",function(err,result)
		{
			if(result.length > 0)
			{
				msg['status']= true;
				msg['message']="Success";
				msg['data']=result;
				res.json(msg)
			}
			else
			{
				msg['status']= false;
				msg['message']="Data not found";
				msg['data']={};
				res.json(msg)
			}
			
		})
	});

})

module.exports = app;
