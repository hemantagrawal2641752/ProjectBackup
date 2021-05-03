var Sequelize = require('sequelize');
var sequelize = require('../common/mysql');


var Usereducation =  sequelize.define('user_education', {
    usereducationID: {
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
    usereducationSchoolName: {
      type: Sequelize.TEXT,
      allowNull: false
    },
	usereducationGrade: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    usereducationDegree: {
      type: Sequelize.STRING(100),
      allowNull: false,
      defaultValue: ''
    },
    usereducationPeriodOfTimeFrom: {
      type: Sequelize.STRING(20),
      allowNull: true,
      defaultValue: ''
    },
    usereducationPeriodOfTimeTo: {
      type: Sequelize.STRING(20),
      allowNull: true,
      defaultValue: ''
    },
    usereducationDescription: {
      type: Sequelize.TEXT,
      allowNull: true
    },
    usereducationPrivarcyType: {
      type: Sequelize.STRING(20),
      allowNull: false,
      defaultValue: 'Public'
    },
    usereducationPrivarcyData: {
      type: Sequelize.TEXT,
      allowNull: true
    },
    usereducationStatus: {
      type: Sequelize.ENUM('Active','Inactive'),
      allowNull: false,
      defaultValue: 'Active'
    },
    usereducationIsDeleted: {
      type: Sequelize.ENUM('1','2'),
      allowNull: false,
      defaultValue: '1'
    },
    usereducationCreatedDate: {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    tableName: 'user_education',
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

module.exports = Usereducation