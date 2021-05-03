/* jshint indent: 2 */
var Sequelize = require('sequelize');
var sequelize = require('../common/mysql');

  var Courses = sequelize.define('courses', {
    courseID: {
      type: Sequelize.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    categoryID: {
      type: Sequelize.INTEGER(3),
      allowNull: false
    },
    coursestdID: {
      type: Sequelize.INTEGER(3),
      allowNull: false
    },
    courseName: {
      type: Sequelize.STRING(100),
      allowNull: false
    },
    courseImage: {
      type: Sequelize.STRING(100),
      allowNull: false
    },
    courseDuration: {
      type: Sequelize.INTEGER(2),
      allowNull: false
    },
    courseMinAge: {
      type: Sequelize.INTEGER(2),
      allowNull: false
    },
    courseMaxAge: {
      type: Sequelize.INTEGER(2),
      allowNull: false
    },
    courseFree: {
      type: Sequelize.ENUM('Free','Paid'),
      allowNull: false
    },
	courseFee: {
      type: Sequelize.DECIMAL(7,2),
      allowNull: false
    },
    courseDescription: {
      type: Sequelize.TEXT,
      allowNull: false
    },
    courseEligiblity: {
      type: Sequelize.TEXT,
      allowNull: false
    },
    courseCareer: {
      type: Sequelize.TEXT,
      allowNull: false
    },
    coursePublished: {
      type: Sequelize.ENUM('Yes','No'),
      allowNull: false,
      defaultValue: 'No'
    },
    courseStatus: {
      type: Sequelize.ENUM('Active','Inactive'),
      allowNull: false,
      defaultValue: 'Active'
    },
    courseCreatedDate: {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    tableName: 'courses',
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


module.exports = Courses