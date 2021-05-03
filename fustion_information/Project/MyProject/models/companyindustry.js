var Sequelize = require('sequelize');
var sequelize = require('../common/mysql');

var CompanyIndustry = sequelize.define('companyindustry',{
    compindID: {
        type: Sequelize.INTEGER(3),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    compindName: {
        type: Sequelize.STRING(100),
        allowNull: false,
        unique: true
    },
    compindRemarks: {
        type: Sequelize.STRING(200),
        allowNull: true,

    },
    compindStatus: {
        type: Sequelize.ENUM('Active','InActive'),
        allowNull: false,
        defaultValue: 'Active'

    },
    compindCreatedDate: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    } 
},
{
    tableName: 'companyindustry',
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

module.exports = CompanyIndustry;