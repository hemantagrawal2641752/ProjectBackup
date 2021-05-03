var Sequelize = require('sequelize');
var sequelize = require('../common/mysql');

var JobType = sequelize.define('jobtype',{
    jobtypeID: {
        type: Sequelize.INTEGER(3),
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    jobtypeName: {
        type: Sequelize.STRING(100),
        allowNull: false,
        unique: true
    },
    jobtypeRemarks: {
        type: Sequelize.STRING(200),
        allowNull: true
    },
    jobtypeStatus: {
        type: Sequelize.ENUM('Active', 'InActive'),
        allowNull: false,
        defaultValue: 'Active'
    },
    jobtypeCreatedDate: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    }
},
{
    tableName: 'jobtype',
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

module.exports = JobType;