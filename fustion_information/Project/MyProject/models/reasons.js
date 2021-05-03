var Sequelize = require('sequelize');
var sequelize = require('../common/mysql');

var Reasons = sequelize.define('reasons',{
    reasonID: {
        type: Sequelize.INTEGER(3),
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    reasonType: {
        type: Sequelize.STRING(50),
        allowNull: false,
        unique: true
    },
    reasonName: {
        type: Sequelize.STRING(100),
        allowNull: false,
        unique: true
    },
    reasonRemarks: {
        type: Sequelize.STRING(200),
        allowNull: true
    },
    reasonstatus: {
        type: Sequelize.ENUM('Active', 'InActive'),
        allowNull: false,
        defaultValue: 'Active'
    },
    reasonCreatedDate: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    }
},
{
    tableName: 'reasons',
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

module.exports = Reasons;