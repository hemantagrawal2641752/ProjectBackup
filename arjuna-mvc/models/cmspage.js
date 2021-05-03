/* jshint indent: 2 */
var Sequelize = require('sequelize');
var sequelize = require('../common/mysql');
//module.exports = function(sequelize, Sequelize) {
  var Cmspage = sequelize.define('cmspage', {	 
    cmspageID: {
      type: Sequelize.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    cmspageName: {
      type: Sequelize.STRING(100),
      allowNull: false,
      defaultValue: '',
      unique: true
    },
    cmspageContents: {
      type: Sequelize.TEXT,
      allowNull: false
    },
    cmspageIsSystemPage: {
      type: Sequelize.ENUM('Yes','No'),
      allowNull: false,
      defaultValue: 'Yes'
    },
    cmspageStatus: {
      type: Sequelize.ENUM('Active','Inactive'),
      allowNull: false,
      defaultValue: 'Active'
    },
    cmspageCreatedDate: {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    tableName: 'cmspage',
	underscored: true,
	timestamps: false,
	paranoid: true
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
//  return Cmspage;
//};
module.exports = Cmspage