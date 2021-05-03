/* jshint indent: 2 */
var Sequelize = require('sequelize');
var sequelize = require('../common/mysql');

var Userexams = sequelize.define('userexams', {
		userexamID: {
			type: Sequelize.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		examID: {
			type: Sequelize.INTEGER(11),
			allowNull: false
		},
		userID: {
			type: Sequelize.INTEGER(11),
			allowNull: false
		},
		userexamName: {
			type: Sequelize.STRING(100),
			allowNull: false
		},
		userexamDuration: {
			type: Sequelize.TIME,
			allowNull: false
		},
		userexamTotalQs: {
			type: Sequelize.INTEGER(3),
			allowNull: false
		},
		userexamQualifyingMarks: {
			type: Sequelize.INTEGER(3),
			allowNull: false
		},
		userexamCorrectAnswer: {
			type: Sequelize.FLOAT,
			allowNull: false
		},
		userexamWrongAnswer: {
			type: Sequelize.FLOAT,
			allowNull: false
		},
		userexamInstruction: {
			type: Sequelize.TEXT,
			allowNull: false
		},
		userexamDate: {
			type: Sequelize.DATE,
			allowNull: false
		},
		userexamMarks: {
			type: Sequelize.FLOAT,
			allowNull: false
		},
		userexamPercentage: {
			type: Sequelize.FLOAT,
			allowNull: false
		},
		userexamRank: {
			type: Sequelize.INTEGER(11),
			allowNull: false
		},
		userexamAttempted: {
			type: Sequelize.INTEGER(3),
			allowNull: false,
			defaultValue: '0'
		},
		userexamCorrect: {
			type: Sequelize.INTEGER(3),
			allowNull: false,
			defaultValue: '0'
		},
		userexamIncorrect: {
			type: Sequelize.INTEGER(3),
			allowNull: false,
			defaultValue: '0'
		},
		userexamSkipped: {
			type: Sequelize.INTEGER(3),
			allowNull: false,
			defaultValue: '0'
		},
		userexamStatus: {
			type: Sequelize.ENUM('Pass', 'Fail'),
			allowNull: false
		},
		userexamGrade: {
			type: Sequelize.STRING(5),
			allowNull: false
		}
	}, {
		tableName: 'userexams',
		timestamps: false
	});

module.exports = Userexams
