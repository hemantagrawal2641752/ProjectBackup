var Sequelize = require('sequelize');
var sequelize = require('../common/mysql');

var Userpassport = sequelize.define('userpassport', {
    userpassport: {
      type: Sequelize.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    userID: {
      type: Sequelize.INTEGER(11),
      allowNull: false
    },
    countryID: {
      type: Sequelize.INTEGER(3),
      allowNull: false
    }
  }, {
    tableName: 'userpassport',
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

module.exports = Userpassport