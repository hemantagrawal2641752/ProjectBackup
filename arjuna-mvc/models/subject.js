/* jshint indent: 2 */
var Sequelize = require('sequelize');
var sequelize = require('../common/mysql');


  var Subject = sequelize.define('subject', {
    subjectID: {
      type: Sequelize.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    coursestdID: {
      type: Sequelize.INTEGER(3),
      allowNull: false
    },
    subjectName: {
      type: Sequelize.STRING(100),
      allowNull: false
    },
    subjectLastMonth: {
      type: Sequelize.STRING(20),
      allowNull: false
    },
    subjectColor: {
      type: Sequelize.STRING(20),
      allowNull: false
    },
    subjectIcon: {
      type: Sequelize.STRING(100),
      allowNull: false
    },
    subjectRemarks: {
      type: Sequelize.STRING(200),
      allowNull: true
    },
    subjectStatus: {
      type: Sequelize.ENUM('Active','Inactive'),
      allowNull: false
    },
    subjectCreatedDate: {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    tableName: 'subject',
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

module.exports = Subject