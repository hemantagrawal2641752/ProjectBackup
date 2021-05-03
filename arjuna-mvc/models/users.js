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
    userFullName: {
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
      allowNull: false,
      unique: true,
	  validate: { isEmail: {msg: "Please enter valid email address."}}
    },
    userPassword: {
      type: Sequelize.STRING(100),
      allowNull: false
    },
    userBirthDate: {
      type: Sequelize.DATEONLY,
      allowNull: true
    },
    userGender: {
      type: Sequelize.ENUM('Male','Female'),
      allowNull: true
    },
    streamID: {
      type: Sequelize.INTEGER(3),
      allowNull: true
    },
    coursestdID: {
      type: Sequelize.INTEGER(3),
      allowNull: true
    },
    instituteID: {
      type: Sequelize.INTEGER(3),
      allowNull: true
    },
    instituteName: {
      type: Sequelize.STRING(100),
      allowNull: true
    },
    userStudentID: {
      type: Sequelize.STRING(25),
      allowNull: true
    },
    userHobbies: {
      type: Sequelize.STRING(500),
      allowNull: true
    },
    userInterest: {
      type: Sequelize.STRING(500),
      allowNull: true
    },
    userProfilePicture: {
      type: Sequelize.STRING(100),
      allowNull: true,
      defaultValue: 'profile_bg.png'
    },
    userFather: {
      type: Sequelize.STRING(100),
      allowNull: true
    },
    userFatherMobile: {
      type: Sequelize.STRING(100),
      allowNull: true
    },
    userFatherEmail: {
      type: Sequelize.STRING(100),
      allowNull: true
    },
    userMother: {
      type: Sequelize.STRING(100),
      allowNull: true
    },
    userMotherMobile: {
      type: Sequelize.STRING(100),
      allowNull: true
    },
    userMotherEmail: {
      type: Sequelize.STRING(100),
      allowNull: true
    },
    userAddress: {
      type: Sequelize.STRING(300),
      allowNull: true
    },
    languageID: {
      type: Sequelize.INTEGER(3),
	  defaultValue: '1',
      allowNull: false
    },
    userDeviceType: {
      type: Sequelize.STRING(10),
      allowNull: false
    },
    userDeviceID: {
      type: Sequelize.STRING(500),
      allowNull: false
    },
    userVerified: {
      type: Sequelize.ENUM('Yes','No'),
      allowNull: false,
      defaultValue: 'No'
    },
    userNewsNotification: {
      type: Sequelize.ENUM('Yes','No'),
      allowNull: false,
      defaultValue: 'Yes'
    },
    userCourseNotification: {
      type: Sequelize.ENUM('Yes','No'),
      allowNull: false,
      defaultValue: 'Yes'
    },
    userOfferNotification: {
      type: Sequelize.ENUM('Yes','No'),
      allowNull: false,
      defaultValue: 'Yes'
    },
    userExamNotification: {
      type: Sequelize.ENUM('Yes','No'),
      allowNull: false,
      defaultValue: 'Yes'
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
    userCreatedDate: {
      type: Sequelize.DATE,
      allowNull: true,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    userSignupOTPVerified: {
      type: Sequelize.ENUM('Yes','No'),
      allowNull: false,
      defaultValue: 'No'
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