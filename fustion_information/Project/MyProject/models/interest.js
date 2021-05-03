var Sequelize = require('sequelize');
var sequelize = require('../common/mysql');

var Interest = sequelize.define('interest',{
    interestID: {
        type: Sequelize.INTEGER(3),
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    interestName: {
        type: Sequelize.STRING(100),
        allowNull: false,
        unique: true
    },
    interestRemarks: {
        type: Sequelize.STRING(200),
        allowNull: true
    },
    interestStatus: {
        type: Sequelize.ENUM('Active', 'InActive'),
        allowNull: false,
        defaultValue: 'Active'
    },
    interestCreatedDate: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    }
},
{
    tableName: 'interest',
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

module.exports = Interest;