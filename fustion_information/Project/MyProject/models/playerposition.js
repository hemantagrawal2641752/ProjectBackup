var Sequelize = require('sequelize');
var sequelize = require('../common/mysql');

var PlayerPosition = sequelize.define('playerposition',{
    plyrposiID: {
        type: Sequelize.INTEGER(3),
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    plyrposiName: {
        type: Sequelize.STRING(100),
        allowNull: false,
        unique: true
    },
    plyrposiRemarks: {
        type: Sequelize.STRING(200),
        allowNull: true
    },
    plyrposiStatus: {
        type: Sequelize.ENUM('Active', 'InActive'),
        allowNull: false,
        defaultValue: 'Active'
    },
    plyrposiCreatedDate: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    }
},
{
    tableName: 'playerposition',
    underscored: true,
    timestamps: false,
    createdAt: false,
    paranoid: true
}, {
    classMethods: {
        associate: function(Models){

        }
    }
}
);

module.exports = PlayerPosition;