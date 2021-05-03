/* jshint indent: 2 */
var Sequelize = require('sequelize');
var sequelize = require('../common/mysql');


  var Usersubscriptions = sequelize.define('usersubscriptions', {
    subscriptionID: {
      type: Sequelize.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    userID: {
      type: Sequelize.INTEGER(11),
      allowNull: false
    },
    planID: {
      type: Sequelize.INTEGER(11),
      allowNull: false
    },
    subscriptionStartDate: {
      type: Sequelize.DATEONLY,
      allowNull: false
    },
    subscriptionEndDate: {
      type: Sequelize.DATEONLY,
      allowNull: false
    },
    subscriptionStatus: {
      type: Sequelize.ENUM('Active','Inactive'),
      allowNull: false
    }
  }, {
    tableName: 'usersubscriptions',
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

module.exports = Usersubscriptions