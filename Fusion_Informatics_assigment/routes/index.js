let express = require('express')
let app = express()

app.get('/', function (req, res) {
	res.send('API Is Working Now')
})

module.exports = app;
