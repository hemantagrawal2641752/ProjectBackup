var Sequelize = require('sequelize');
var sequelize = require('../common/mysql');

var FootAllTypes = sequelize.define('footballtype',{
    footbltypeID: {
        type: Sequelize.INTEGER(3),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    footbltypeName: {
        type: Sequelize.STRING(100),
        allowNull: false,
        unique: true
    },
    footbltypeRemarks: {
        type: Sequelize.STRING(200),
        allowNull: true,

    },
    footbltypeStatus: {
        type: Sequelize.ENUM('Active','InActive'),
        allowNull: false,
        defaultValue: 'Active'

    },
    footbltypeCreatedDate: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    footbltypeImage: {
        type: Sequelize.STRING(100),
        allowNull: true,
        defaultValue: 'profile_bg.png'
      }
},
{
    tableName: 'footballtype',
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

module.exports = FootAllTypes;