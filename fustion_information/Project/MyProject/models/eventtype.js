var Sequelize = require('sequelize');
var sequelize = require('../common/mysql');

var EventType = sequelize.define('eventtype',{
    eventtypeID: {
        type: Sequelize.INTEGER(3),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    eventtypeName: {
        type: Sequelize.STRING(100),
        allowNull: false,
        unique: true
    },
    eventtypeRemarks: {
        type: Sequelize.STRING(200),
        allowNull: true,

    },
    eventtypeStatus: {
        type: Sequelize.ENUM('Active','InActive'),
        allowNull: false,
        defaultValue: 'Active'

    },
    eventtypeCreatedDate: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    } 
},
{
    tableName: 'eventtype',
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

module.exports = EventType;