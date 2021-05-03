/* jshint indent: 2 */
var Sequelize = require('sequelize');
var sequelize = require('../common/mysql');


  var Coursechapters = sequelize.define('coursechapters', {
    coursechapterID: {
      type: Sequelize.INTEGER(11),
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
    coursechapterNo: {
      type: Sequelize.INTEGER(3),
      allowNull: false
    },
    coursechapterName: {
      type: Sequelize.STRING(100),
      allowNull: false
    },
    coursechapterDescription: {
      type: Sequelize.TEXT,
      allowNull: false
    },
    coursechapterFile: {
      type: Sequelize.STRING(100),
      allowNull: false
    },
    coursechapterFileURL: {
      type: Sequelize.STRING(300),
      allowNull: false
    },
    coursechapterStatus: {
      type: Sequelize.ENUM('Active','Inactive'),
      allowNull: false,
      defaultValue: 'Active'
    },
    coursechapterCreatedDate: {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    tableName: 'coursechapters',
  underscored: true,
	timestamps: false,
	createAt: false,
	paranoid: true
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });

module.exports = Coursechapters