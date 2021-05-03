/* jshint indent: 2 */
var Sequelize = require('sequelize');
var sequelize = require('../common/mysql');

  var State= sequelize.define('state', {
    stateID: {
      type: Sequelize.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    countryID: {
      type: Sequelize.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    stateName: {
      type: Sequelize.STRING(100),
      allowNull: false
    },
    stateRemark: {
      type: Sequelize.STRING(200),
      allowNull: true
    },
    stateStatus: {
      type: Sequelize.ENUM('Active','Inactive'),
      allowNull: false,
      defaultValue: 'Active'
    },
    stateCreatedDate: {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    tableName: 'state',
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
module.exports = State;