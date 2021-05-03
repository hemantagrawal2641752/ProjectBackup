/**
 * config 
 */
var path = require('path');

var config = {
	debug: true,
	port: 3006,
	mysql: {
		host: 'localhost',
		username: 'root',
		password: '',
		database: 'testing'
	}
}

module.exports = config