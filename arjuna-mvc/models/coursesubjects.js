/* jshint indent: 2 */
var Sequelize = require('sequelize');
var sequelize = require('../common/mysql');


  var Coursesubjects = sequelize.define('coursesubjects', {
    coursesubjID: {
      type: Sequelize.INTEGER(3),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    courseID: {
      type: Sequelize.INTEGER(11),
      allowNull: false
    },
    coursesubjName: {
      type: Sequelize.STRING(100),
      allowNull: false
    },
    coursesubjIcon: {
      type: Sequelize.STRING(255),
      allowNull: false
    },
    coursesubjColor: {
      type: Sequelize.STRING(20),
      allowNull: false
    },
    coursesubjDescription: {
      type: Sequelize.TEXT,
      allowNull: false
    },
    coursesubjChapters: {
      type: Sequelize.INTEGER(3),
      allowNull: false,
      defaultValue: '0'
    },
    coursesubjStatus: {
      type: Sequelize.ENUM('Active','Inactive'),
      allowNull: false,
      defaultValue: 'Active'
    },
    coursesubjCreatedDate: {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    tableName: 'coursesubjects',
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

module.exports = Coursesubjects