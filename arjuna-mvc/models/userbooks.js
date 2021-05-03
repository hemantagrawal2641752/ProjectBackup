/* jshint indent: 2 */
var Sequelize = require('sequelize');
var sequelize = require('../common/mysql');

  var Userbooks = sequelize.define('userbooks', {
    userbookID: {
      type: Sequelize.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    userID: {
      type: Sequelize.INTEGER(11),
      allowNull: false
    },
    courseID: {
      type: Sequelize.INTEGER(11),
      allowNull: false
    },
    userbookPurchaseDate: {
      type: Sequelize.DATE,
      allowNull: false
    },
    userbookPurchaseAmount: {
      type: Sequelize.DECIMAL(7,2),
      allowNull: false
    }
  }, {
    tableName: 'userbooks',
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


module.exports = Userbooks