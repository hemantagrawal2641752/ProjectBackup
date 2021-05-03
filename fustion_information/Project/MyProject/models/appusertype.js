var Sequelize = require('sequelize');
var sequelize = require('../common/mysql');

var AppUserType = sequelize.define('appusertype',{
    apputypeID: {
        type: Sequelize.INTEGER(3),
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    apputypeName: {
        type: Sequelize.STRING(100),
        allowNull: false,
        unique: true
    },
    apputypeRemarks: {
        type: Sequelize.STRING(200),
        allowNull: true
    },
    apputypeStatus: {
        type: Sequelize.ENUM('Active', 'InActive'),
        allowNull: false,
        defaultValue: 'Active'
    },
    apputypeCreatedDate: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    apputypeImage: {
        type: Sequelize.STRING(100),
        allowNull: true,
        defaultValue: 'profile_bg.png'
      }
},
{
    tableName: 'appusertype',
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

module.exports = AppUserType;