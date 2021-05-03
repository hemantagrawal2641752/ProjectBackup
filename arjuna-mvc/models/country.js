/* jshint indent: 2 */
var Sequelize = require('sequelize');
var sequelize = require('../common/mysql');
//module.exports = function(sequelize, Sequelize) {
//  return sequelize.define('country', {
  
var Country = sequelize.define('country', {
   countryID: {
      type: Sequelize.INTEGER(3),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    countryName: {
      type: Sequelize.STRING(100),
      allowNull: false,
      unique: true
    },
    countryISO3Code: {
      type: Sequelize.STRING(3),
      allowNull: false
    },
    countryISO2Code: {
      type: Sequelize.STRING(2),
      allowNull: false
    },
    countryCurrencyCode: {
      type: Sequelize.STRING(10),
      allowNull: false
    },
    countryDialCode: {
      type: Sequelize.STRING(5),
      allowNull: false
    },
    countryFlagImage: {
      type: Sequelize.STRING(100),
      allowNull: false
    },
    countryRemark: {
      type: Sequelize.STRING(200),
      allowNull: true
    },
    countryStatus: {
      type: Sequelize.ENUM('Active','Inactive'),
      allowNull: false,
      defaultValue: 'Active'
    },
    countryCreatedDate: {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    tableName: 'country',
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
	


module.exports = Country
