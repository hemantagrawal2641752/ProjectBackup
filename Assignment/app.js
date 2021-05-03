let express = require('express')
let app = express()
let mysql = require('mysql')
let path = require('path')

let myConnection  = require('express-myconnection')

let config = require('./config')

let dbOptions = {
	host:	  config.database.host,
	user: 	  config.database.user,
	password: config.database.password,
	port: 	  config.database.port, 
	database: config.database.db
}

let bodyParser = require('body-parser')



app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use(myConnection(mysql, dbOptions, 'pool'))
app.use(express.static('public'))
app.set('view engine', 'ejs')


let index = require('./routes/index')

// app.use((req,res,next)=>
// {
// 	var err = new Error('Page Not Found');
// 	err.status = 404;
// 	next(err);
// })

// app.use((err,req,res,next)=>
// {
// 	res.status(err.status || 500);
// 	res.send(err.message)
// });



app.use('/', index)


app.listen(3000, function(){
	console.log('Server running at port 3000:http://localhost:3000')
})
