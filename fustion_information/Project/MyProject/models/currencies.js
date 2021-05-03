var Sequelize = require('sequelize');
var sequelize = require('../common/mysql');

var Currency = sequelize.define('currencies',{
    curruncyID: {
        type: Sequelize.INTEGER(3),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    curruncyName: {
        type: Sequelize.STRING(100),
        allowNull: false,
        unique: true
    },
    curruncyCode: {
        type: Sequelize.STRING(50),
        allowNull: false,
        unique: true
    },
    curruncyRemarks: {
        type: Sequelize.STRING(200),
        allowNull: true,

    },
    curruncystatus: {
        type: Sequelize.ENUM('Active','InActive'),
        allowNull: false,
        defaultValue: 'Active'

    },
    curruncyCreatedDate: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    } 
},
{
    tableName: 'currencies',
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

module.exports = Currency;