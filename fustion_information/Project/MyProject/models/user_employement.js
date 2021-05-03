var Sequelize = require('sequelize');
var sequelize = require('../common/mysql');


var Useremployement =  sequelize.define('user_employement', {
    useremployementID: {
      type: Sequelize.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    userID: {
      type: Sequelize.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    languageID: {
      type: Sequelize.INTEGER(3),
      allowNull: false,
      defaultValue: '0'
    },
    useremployementPositionCompanyName: {
      type: Sequelize.STRING(100),
      allowNull: false,
      defaultValue: ''
    },
    jobfuncID: {
      type: Sequelize.INTEGER(3),
      allowNull: false,
      defaultValue: '0'
    },
    useremployementPeriodOfTimeFrom: {
      type: Sequelize.STRING(20),
      allowNull: false,
      defaultValue: ''
    },
    useremployementPeriodOfTimeTo: {
      type: Sequelize.STRING(20),
      allowNull: false,
      defaultValue: ''
    },
    useremployementCityText: {
      type: Sequelize.STRING(100),
      allowNull: true,
      defaultValue: ''
    },
    useremployementCountryText: {
      type: Sequelize.STRING(100),
      allowNull: true,
      defaultValue: ''
    },
    useremployementDescription: {
      type: Sequelize.TEXT,
      allowNull: false
    },
    useremployementPrivacyType: {
      type: Sequelize.STRING(20),
      allowNull: false,
      defaultValue: 'Public'
    },
    useremployementPrivacyData: {
      type: Sequelize.TEXT,
      allowNull: true
    },
    useremployementIsCurrent: {
      type: Sequelize.ENUM('Yes','No'),
      allowNull: false,
      defaultValue: 'No'
    },
    useremployementStatus: {
      type: Sequelize.ENUM('Active','Inactive'),
      allowNull: false,
      defaultValue: 'Active'
    },
    useremployementIsDeleted: {
      type: Sequelize.ENUM('1','2'),
      allowNull: false,
      defaultValue: '1'
    },
    useremployementCreatedDate: {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    countryID: {
      type: Sequelize.INTEGER(5),
      allowNull: false,
      defaultValue: '0'
    },
    stateID: {
      type: Sequelize.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    cityID: {
      type: Sequelize.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    useremployementLatitude: {
      type: Sequelize.STRING(50),
      allowNull: false,
      defaultValue: ''
    },
    useremployementLongitude: {
      type: Sequelize.STRING(50),
      allowNull: false,
      defaultValue: ''
    }
  }, {
    tableName: 'user_employement',
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

module.exports = Useremployement