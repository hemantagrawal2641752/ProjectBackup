var Sequelize = require('sequelize');
var sequelize = require('../common/mysql');

var Academy = sequelize.define('academy',{
    academyID: {
        type: Sequelize.INTEGER(3),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    academyName: {
        type: Sequelize.STRING(100),
        allowNull: false,
        unique: true
    },
    academyRemarks: {
        type: Sequelize.STRING(200),
        allowNull: true,

    },
    academyStatus: {
        type: Sequelize.ENUM('Active','InActive'),
        allowNull: false,
        defaultValue: 'Active'

    },
},
{
    tableName: 'academy',
    underscored: true,
    timestamps: false,
    createdAt: false,
    paranoid: true
}, {
    classMethods: {
        associate: function(models){

        }

    }
}

);

module.exports = Academy;