/* jshint indent: 2 */
var Sequelize = require('sequelize');
var sequelize = require('../common/mysql');

  var Questionoptions = sequelize.define('questionoptions', {
    queoptionID: {
      type: Sequelize.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    queID: {
      type: Sequelize.BIGINT,
      allowNull: false
    },
    queoptionOption: {
      type: Sequelize.STRING(500),
      allowNull: false
    },
    queoptionCorrect: {
      type: Sequelize.ENUM('Yes','No'),
      allowNull: false
    }
  }, {
    tableName: 'questionoptions',
	underscored: true,
	timestamps: false,
	paranoid: true
  });


module.exports = Questionoptions