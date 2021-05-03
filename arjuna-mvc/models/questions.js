/* jshint indent: 2 */
var Sequelize = require('sequelize');
var sequelize = require('../common/mysql');

  var Questions = sequelize.define('questions', {
    queID: {
      type: Sequelize.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
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
    }
  }, {
    tableName: 'questions',
	underscored: true,
	timestamps: false,
	paranoid: true
  });


module.exports = Questions