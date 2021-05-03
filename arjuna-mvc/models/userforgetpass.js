/* jshint indent: 2 */
var Sequelize = require('sequelize');
var sequelize = require('../common/mysql');

var Userforgetpass = sequelize.define('userforgetpass', {
		userforgetpassID: {
			type: Sequelize.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		userID: {
			type: Sequelize.INTEGER(11),
			allowNull: false,
			defaultValue: '0'
		},
		userforgetpassResetCode: {
			type: Sequelize.STRING(10),
			allowNull: false,
			defaultValue: '0'
		},
		userforgetpassResetCodeExp: {
			type: Sequelize.DATE,
			allowNull: false,
			defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
		},
		userforgetpassStatus: {
			type: Sequelize.ENUM('Active', 'Inactive'),
			allowNull: false,
			defaultValue: 'Active'
		},
		userforgetpassDate: {
			type: Sequelize.DATE,
			allowNull: false,
			defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
		}
	}, {
		tableName: 'userforgetpass',
		timestamps: false
	});

module.exports = Userforgetpass
