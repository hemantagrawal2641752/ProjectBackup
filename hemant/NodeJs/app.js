var express = require('express')
var bodyParser = require('body-parser');
var app = express()
const cors = require('cors');


var mysql = require('mysql')


var myConnection  = require('express-myconnection')

var config = require('./config')

var dbOptions = {
	host:	  config.database.host,
	user: 	  config.database.user,
	password: config.database.password,
	port: 	  config.database.port, 
	database: config.database.db
}


app.use(myConnection(mysql, dbOptions, 'pool'))



var index = require('./routes/index')
var update_user = require('./routes/update_user')
var delete_user = require('./routes/delete_user')
var add_user = require('./routes/add_user')
var getUser = require('./routes/getUser')


var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())


var methodOverride = require('method-override')


app.use(methodOverride(function (req, res) {
  if (req.body && typeof req.body === 'object' && '_method' in req.body) {
    var method = req.body._method
    delete req.body._method
    return method
  }
}))

app.get('/', () => {
	console.log('running')
})

console.log("hii")

app.use('/getAll', index)
app.use('/update_user', update_user)
app.use('/delete_user', delete_user)
app.use('/add_user', add_user)
app.use('/getUser',getUser)


app.listen(3000, function()
{
	console.log('Server running at port 3000: http://172.30.0.143:3000')
})
