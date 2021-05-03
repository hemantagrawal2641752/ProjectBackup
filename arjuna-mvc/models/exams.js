/* jshint indent: 2 */
var Sequelize = require('sequelize');
var sequelize = require('../common/mysql');

  var Exams = sequelize.define('exams', {
    examID: {
      type: Sequelize.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    categoryID: {
      type: Sequelize.INTEGER(3),
      allowNull: false
    },
    examType: {
      type: Sequelize.ENUM('Full Length','Subject Wise'),
      allowNull: false
    },
    coursesubjID: {
      type: Sequelize.INTEGER(11),
      allowNull: false
    },
    courseID: {
      type: Sequelize.INTEGER(3),
      allowNull: false
    },
    coursechapterIDs: {
      type: Sequelize.STRING(500),
      allowNull: false
    },
    examName: {
      type: Sequelize.STRING(100),
      allowNull: false
    },
    examDuration: {
      type: Sequelize.TIME,
      allowNull: false
    },
    examStartDate: {
      type: Sequelize.DATEONLY,
      allowNull: false
    },
    examStartTime: {
      type: Sequelize.TIME,
      allowNull: false
    },
    examEndDate: {
      type: Sequelize.DATEONLY,
      allowNull: false
    },
    examEndTime: {
      type: Sequelize.TIME,
      allowNull: false
    },
    examQsL1: {
      type: Sequelize.INTEGER(3),
      allowNull: false
    },
    examQsL1SubID: {
      type: Sequelize.STRING(11),
      allowNull: false
    },
    examQsL2: {
      type: Sequelize.INTEGER(3),
      allowNull: false
    },
    examQsL2SubID: {
      type: Sequelize.STRING(11),
      allowNull: false
    },
    examQsL3: {
      type: Sequelize.INTEGER(3),
      allowNull: false
    },
    examQsL3SubID: {
      type: Sequelize.STRING(11),
      allowNull: false
    },
    examTotalQs: {
      type: Sequelize.INTEGER(3),
      allowNull: false
    },
    examQualifyingMarks: {
      type: Sequelize.INTEGER(3),
      allowNull: false
    },
    examMaxAttempt: {
      type: Sequelize.INTEGER(2),
      allowNull: false
    },
    examMaxDaysReschedule: {
      type: Sequelize.INTEGER(2),
      allowNull: false
    },
    examCorrectAnswer: {
      type: Sequelize.FLOAT,
      allowNull: false
    },
    examWrongAnswer: {
      type: Sequelize.FLOAT,
      allowNull: false
    },
    examInstruction: {
      type: Sequelize.TEXT,
      allowNull: false
    },
    examStatus: {
      type: Sequelize.ENUM('Active','Inactive'),
      allowNull: false
    }
  }, {
    tableName: 'exams',
	underscored: true,
	timestamps: false,
	paranoid: true
  });


module.exports = Exams