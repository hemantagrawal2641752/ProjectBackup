/* jshint indent: 2 */
var Sequelize = require('sequelize');
var sequelize = require('../common/mysql');


  var Chapterfiles = sequelize.define('chapterfiles', {
    chapterfileID: {
      type: Sequelize.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    coursechapterID: {
      type: Sequelize.INTEGER(11),
      allowNull: false
    },
    chapterfileFileType: {
      type: Sequelize.ENUM('Video','Contents'),
      allowNull: false
    },
    chapterfileFile: {
      type: Sequelize.STRING(300),
      allowNull: false
    },
	chapterfile: {
      type: Sequelize.STRING(300),
      allowNull: true
    },
    chapterfileStatus: {
      type: Sequelize.ENUM('Active','Inactive'),
      allowNull: false
    }
  }, {
    tableName: 'chapterfiles' ,
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

module.exports = Chapterfiles