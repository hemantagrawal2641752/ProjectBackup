/* jshint indent: 2 */
var Sequelize = require('sequelize');
var sequelize = require('../common/mysql');
//module.exports = function(sequelize, Sequelize) {
  var Template = sequelize.define('template', {
    templateID: {
      type: Sequelize.INTEGER(5),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    templateName: {
      type: Sequelize.STRING(100),
      allowNull: false,
      defaultValue: ''
    },
    templateActionName: {
      type: Sequelize.STRING(100),
      allowNull: false
    },
    templatePush: {
      type: Sequelize.ENUM('Yes','No'),
      allowNull: false
    },
    templateEmail: {
      type: Sequelize.ENUM('Yes','No'),
      allowNull: false
    },
    templateSMS: {
      type: Sequelize.ENUM('Yes','No'),
      allowNull: false
    },
    templateConstantCode: {
      type: Sequelize.STRING(6),
      allowNull: false,
      defaultValue: '',
      unique: true
    },
    templateSubject: {
      type: Sequelize.STRING(250),
      allowNull: false,
      defaultValue: ''
    },
    templateEmailText: {
      type: Sequelize.TEXT,
      allowNull: false
    },
    templateSMSText: {
      type: Sequelize.STRING(1000),
      allowNull: false,
      defaultValue: ''
    },
    templateNotificationText: {
      type: Sequelize.STRING(1000),
      allowNull: false,
      defaultValue: ''
    },
    templateStatus: {
      type: Sequelize.ENUM('Active','Inactive'),
      allowNull: false,
      defaultValue: 'Active'
    },
    templateCreatedDate: {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    tableName: 'template',
	underscored: true,
	timestamps: false,
	paranoid: true
  });
//};
module.exports = Template