var Sequelize = require('sequelize');
var sequelize = require('../common/mysql');



/*module.exports = function(sequelize, DataTypes) {
  return */
  var Userlocation = sequelize.define('userlocation', {
    userlocationID: {
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
      allowNull: true
    },
    userlocationPincode: {
      type: Sequelize.STRING(10),
      allowNull: true
    },
    cityID: {
      type: Sequelize.INTEGER(11),
      allowNull: true
    },
    userlocationType: {
      type: Sequelize.STRING(20),
      allowNull: false
    }
  }, {
    tableName: 'userlocation',
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

module.exports = Userlocation