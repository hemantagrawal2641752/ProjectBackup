let express = require('express')
let bodyParser = require('body-parser');
let app = express()
const cors = require('cors');
let mysql = require('mysql')
let myConnection  = require('express-myconnection')
let config = require('./config')






let dbOptions = {
	host:	  config.database.host,
	user: 	  config.database.user,
	password: config.database.password,
	port: 	  config.database.port, 
	database: config.database.db
}


app.use(myConnection(mysql, dbOptions, 'pool'))



let index = require('./routes/index')
let users_list = require('./routes/users_list')
let Registration = require('./routes/registration')
let logout = require('./routes/logout')
let login = require('./routes/login')
let csv_file = require('./routes/csv_file')


app.use(bodyParser.json({limit: "50mb"}));
app.use(bodyParser.urlencoded({limit: "50mb", extended: true, parameterLimit:50000}));
app.use(cors())


let methodOverride = require('method-override')


app.use(methodOverride(function (req, res) {
  if (req.body && typeof req.body === 'object' && '_method' in req.body) {
    let method = req.body._method
    delete req.body._method
    return method
  }
}))

app.use('/', index)
app.use('/users_list', users_list)
app.use('/Registration', Registration)
app.use('/logout', logout)
app.use('/login',login)
app.use('/csv_file',csv_file)


app.listen(3000, function()
{
	console.log('Server running at port 3000: http://172.30.0.143:3000')
})


