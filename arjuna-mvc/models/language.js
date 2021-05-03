/* jshint indent: 2 */
var Sequelize = require('sequelize');
var sequelize = require('../common/mysql');


  var Language= sequelize.define('language', {
    languageID: {
      type: Sequelize.INTEGER(3),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    languageName: {
      type: Sequelize.STRING(100),
      allowNull: false,
      unique: true
    },
    languageStatus: {
      type: Sequelize.ENUM('Active','Inactive'),
      allowNull: false,
      defaultValue: 'Active'
    },
    languageCreatedDate: {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    tableName: 'language',
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
module.exports = Language
