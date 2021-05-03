/* jshint indent: 2 */
var Sequelize = require('sequelize');
var sequelize = require('../common/mysql');
  
var District = sequelize.define('district', {
    districtID: {
      type: Sequelize.INTEGER(3),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    districtName: {
      type: Sequelize.STRING(100),
      allowNull: false,
      unique: true
    },
    districtISO3Code: {
      type: Sequelize.STRING(3),
      allowNull: false
    },
    districtISO2Code: {
      type: Sequelize.STRING(2),
      allowNull: false
    },
    districtCurrencyCode: {
      type: Sequelize.STRING(10),
      allowNull: false
    },
    districtDialCode: {
      type: Sequelize.STRING(5),
      allowNull: false
    },
    districtFlagImage: {
      type: Sequelize.STRING(100),
      allowNull: false
    },
    districtRemark: {
      type: Sequelize.STRING(200),
      allowNull: true
    },
    districtStatus: {
      type: Sequelize.ENUM('Active','Inactive'),
      allowNull: false,
      defaultValue: 'Active'
    },
    districtCreatedDate: {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    tableName: 'district',
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
    
module.exports = District
