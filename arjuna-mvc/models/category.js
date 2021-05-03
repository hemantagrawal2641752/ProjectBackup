/* jshint indent: 2 */
var Sequelize = require('sequelize');
var sequelize = require('../common/mysql');


  var Category = sequelize.define('category', {
    categoryID	: {
      type: Sequelize.INTEGER(3),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    categoryName: {
      type: Sequelize.STRING(100),
      allowNull: false,
      unique: true
    },
    categoryRemarks: {
      type: Sequelize.STRING(200),
      allowNull: true
    },
    categoryStatus: {
      type: Sequelize.ENUM('Active','Inactive'),
      allowNull: false
    },
    categoryCreatedDate: {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    tableName: 'category',
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
 
 
module.exports = Category;