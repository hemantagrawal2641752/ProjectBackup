var Sequelize = require('sequelize');
var sequelize = require('../common/mysql');

var Club = sequelize.define('club',{
    clubID: {
        type: Sequelize.INTEGER(3),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    clubName: {
        type: Sequelize.STRING(100),
        allowNull: false,
        unique: true
    },
    clubRemarks: {
        type: Sequelize.STRING(200),
        allowNull: true,

    },
    clubStatus: {
        type: Sequelize.ENUM('Active','InActive'),
        allowNull: false,
        defaultValue: 'Active'

    },
    clubCreatedDate: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    } 
},
{
    tableName: 'club',
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

module.exports = Club;