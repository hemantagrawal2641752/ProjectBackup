/* jshint indent: 2 */
var Sequelize = require('sequelize');
var sequelize = require('../common/mysql');


//module.exports = function(sequelize, DataTypes) {
 // return sequelize.define('users', {
var Users = sequelize.define('users', {	 
  userID: {
      type: Sequelize.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    userFirstName: {
      type: Sequelize.STRING(100),
      allowNull: true
    },
    userLastName: {
      type: Sequelize.STRING(100),
      allowNull: false
    },
    userCountryCode: {
      type: Sequelize.STRING(5),
      allowNull: false
    },
    userMobile: {
      type: Sequelize.STRING(10),
      allowNull: false,
      unique: true,
	  validate: {  len: {args: [10, 10], msg: "Mobile number must be 10 Digits."}, isNumeric: {msg: "Please enter valid mobile number."}}
    },
    userEmail: {
      type: Sequelize.STRING(100),
      allowNull: true,
      unique: true,
	  validate: { isEmail: {msg: "Please enter valid email address."}}
    },
    userPassword: {
      type: Sequelize.STRING(100),
      allowNull: false
    },
    
    userGender: {
      type: Sequelize.ENUM('Male','Female'),
      allowNull: false
    },
    userProfilePicture: {
      type: Sequelize.STRING(100),
      allowNull: true,
      defaultValue: 'profile_bg.png'
    },
    languageID: {
      type: Sequelize.INTEGER(3),
      allowNull: false
    },
    userDeviceType: {
      type: Sequelize.STRING(20),
      allowNull: false
    },
    userDeviceID: {
      type: Sequelize.STRING(500),
      allowNull: false
    },
    userOVerified: {
      type: Sequelize.ENUM('Yes','No'),
      allowNull: false,
      defaultValue: 'No'
    },
    userStatus: {
      type: Sequelize.ENUM('Active','Inactive'),
      allowNull: true,
      defaultValue: 'Active'
    },
    userOTP: {
      type: Sequelize.STRING(6),
      allowNull: true
    },
    apputypeID: {
      type: Sequelize.INTEGER(3),
      allowNull: false
    },
    appuroleID: {
      type: Sequelize.INTEGER(3),
      allowNull: false
    },
    footbltypeID: {
      type: Sequelize.INTEGER(3),
      allowNull: false
    },
    specialityID: {
      type: Sequelize.INTEGER(3),
      allowNull: false
    },
    userFBID: {
      type: Sequelize.STRING(255),
      allowNull: true
    },
    userReferKey: {
      type: Sequelize.STRING(10),
      allowNull: false
    },
    userGoogleID: {
      type: Sequelize.STRING(255),
      allowNull: true
    },
    userLinkedinID: {
      type: Sequelize.STRING(255),
      allowNull: true
    },
    agegroupID: {
      type: Sequelize.INTEGER(3),
      allowNull: false
    },
    userCreatedDate: {
      type: Sequelize.DATE,
      allowNull: true,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    }
	
  }, {
    tableName: 'users',
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

module.exports = Users