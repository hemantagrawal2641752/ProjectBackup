var Sequelize = require('sequelize');
var sequelize = require('../common/mysql');

var ConnectionType = sequelize.define('connectiontype',{
    conntypeID: {
        type: Sequelize.INTEGER(3),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    conntypeName: {
        type: Sequelize.STRING(100),
        allowNull: false,
        unique: true
    },
    conntypeRemarks: {
        type: Sequelize.STRING(200),
        allowNull: true,

    },
    conntypeStatus: {
        type: Sequelize.ENUM('Active','InActive'),
        allowNull: false,
        defaultValue: 'Active'

    },
    conntypeCreatedDate: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    } 
},
{
    tableName: 'connectiontype',
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

module.exports = ConnectionType;