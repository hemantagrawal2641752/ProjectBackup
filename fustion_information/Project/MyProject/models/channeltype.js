var Sequelize = require('sequelize');
var sequelize = require('../common/mysql');

var Channel = sequelize.define('channeltype',{
    chnltypeID: {
        type: Sequelize.INTEGER(3),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    chnltypeName: {
        type: Sequelize.STRING(100),
        allowNull: false,
        unique: true
    },
    chnltypeRemarks: {
        type: Sequelize.STRING(200),
        allowNull: true,

    },
    chnltypeStatus: {
        type: Sequelize.ENUM('Active','InActive'),
        allowNull: false,
        defaultValue: 'Active'

    },
    chnltypeCreatedDate: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    } 
},
{
    tableName: 'channeltype',
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

module.exports = Channel;