/* jshint indent: 2 */
var Sequelize = require('sequelize');
var sequelize = require('../common/mysql');


  var Userexamquestions=  sequelize.define('userexamquestions', {
    queID: {
      type: Sequelize.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    userexamID: {
      type: Sequelize.INTEGER(11),
      allowNull: false
    },
    courseID: {
      type: Sequelize.INTEGER(11),
      allowNull: false
    },
    coursesubjID: {
      type: Sequelize.INTEGER(11),
      allowNull: false
    },
    coursechapterID: {
      type: Sequelize.INTEGER(11),
      allowNull: false
    },
    queType: {
      type: Sequelize.ENUM('MCQ','MMCQ'),
      allowNull: false
    },
    queDifficultyevel: {
      type: Sequelize.INTEGER(1),
      allowNull: false
    },
    queQuestion: {
      type: Sequelize.STRING(500),
      allowNull: false
    },
    queSolution: {
      type: Sequelize.STRING(500),
      allowNull: false
    },
    queDisplayType: {
      type: Sequelize.ENUM('Normal','Table'),
      allowNull: false
    },
    queStatus: {
      type: Sequelize.ENUM('Active','Inactive'),
      allowNull: false
    },
    queOldqueID: {
      type: Sequelize.INTEGER(11),
      allowNull: false
    },
    queOption1: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    queOption2: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    queOption3: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    queOption4: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    queCorrectAns: {
      type: Sequelize.STRING(10),
      allowNull: true
    },
    queFlag: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    queReadTime: {
      type: Sequelize.TIME,
      allowNull: true
    },
    queAnswered: {
      type: Sequelize.ENUM('Yes','No'),
      allowNull: false,
      defaultValue: 'No'
    }
	,
    queAnsweredOption: {
      type: Sequelize.STRING(10),
      allowNull: true
    },
    queAnsweredCorrect: {
      type: Sequelize.ENUM('Yes','No'),
      allowNull: false,
      defaultValue: 'No'
    },
    queMarks: {
      type: Sequelize.DECIMAL(5,2),
      allowNull: false,
      defaultValue: '0.00'
    },
	userexamAttempted: {
      type: Sequelize.INTEGER(3),
      allowNull: false,
      defaultValue: 0
    },
	userexamCorrect: {
      type: Sequelize.INTEGER(3),
      allowNull: false,
      defaultValue: 0
    },
	userexamIncorrect: {
      type: Sequelize.INTEGER(3),
      allowNull: false,
      defaultValue: 0
    },
	userexamSkipped: {
      type: Sequelize.INTEGER(3),
      allowNull: false,
      defaultValue: 0
    }
  }, {
    tableName: 'userexamquestions',
	underscored: true,
	timestamps: false,
	createAt: false,
	paranoid: true
  });

module.exports = Userexamquestions
