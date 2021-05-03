var Sequelize = require('sequelize');
var sequelize = require('../common/mysql');

var FoobAllLevel = sequelize.define('fooballlevel',{
    footbllevelID: {
        type: Sequelize.INTEGER(3),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    footbllevelName: {
        type: Sequelize.STRING(100),
        allowNull: false,
        unique: true
    },
    footbllevelRemarks: {
        type: Sequelize.STRING(200),
        allowNull: true,

    },
    footbllevelStatus: {
        type: Sequelize.ENUM('Active','InActive'),
        allowNull: false,
        defaultValue: 'Active'

    },
    footbllevelCreatedDate: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    } 
},
{
    tableName: 'fooballlevel',
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

module.exports = FoobAllLevel;