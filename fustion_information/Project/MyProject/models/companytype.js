var Sequelize = require('sequelize');
var sequelize = require('../common/mysql');

var CompanyType = sequelize.define('companytype',{
    comptypeID: {
        type: Sequelize.INTEGER(3),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    comptypeName: {
        type: Sequelize.STRING(100),
        allowNull: false,
        unique: true
    },
    comptypeRemarks: {
        type: Sequelize.STRING(200),
        allowNull: true,

    },
    comptypeStatus: {
        type: Sequelize.ENUM('Active','InActive'),
        allowNull: false,
        defaultValue: 'Active'

    },
    comptypeCreatedDate: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    } 
},
{
    tableName: 'companytype',
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

module.exports = CompanyType;