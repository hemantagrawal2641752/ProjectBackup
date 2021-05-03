var Sequelize = require('sequelize');
var sequelize = require('../common/mysql');

var JobFunction = sequelize.define('jobfunction',{
    jobfuncID: {
        type: Sequelize.INTEGER(3),
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    jobfuncName: {
        type: Sequelize.STRING(100),
        allowNull: false,
        unique: true
    },
    jobfuncRemarks: {
        type: Sequelize.STRING(200),
        allowNull: true
    },
    jobfuncStatus: {
        type: Sequelize.ENUM('Active', 'InActive'),
        allowNull: false,
        defaultValue: 'Active'
    },
    jobfuncCreatedDate: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    }
},
{
    tableName: 'jobfunction',
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

module.exports = JobFunction;