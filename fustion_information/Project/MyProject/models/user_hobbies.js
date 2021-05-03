var Sequelize = require('sequelize');
var sequelize = require('../common/mysql');


var Userhobbies =  sequelize.define('user_hobbies', {
    userhobbiesID: {
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
    hobbyID: {
      type: Sequelize.INTEGER(3),
      allowNull: false,
      defaultValue: '0'
    },
    userhobbiesDate: {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    tableName: 'user_hobbies',
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

module.exports = Userhobbies