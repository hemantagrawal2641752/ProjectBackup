var Sequelize = require('sequelize');
var sequelize = require('../common/mysql');

var AppUserRole = sequelize.define('appuserrole',{
    appuroleID: {
        type: Sequelize.INTEGER(3),
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    appuroleName: {
        type: Sequelize.STRING(100),
        allowNull: false,
        unique: true
    },
    apputypeID: {
        type: Sequelize.INTEGER(3),
        allowNull: false,
        defaultValue: '0'
    },
    appuroleRemarks: {
        type: Sequelize.STRING(200),
        allowNull: true
    },
    appuroleStatus: {
        type: Sequelize.ENUM('Active', 'InActive'),
        allowNull: false,
        defaultValue: 'Active'
    },
    appuroleCreatedDate: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    appuroleImage: {
        type: Sequelize.STRING(100),
        allowNull: true,
        defaultValue: 'profile_bg.png'
      }
},
{
    tableName: 'appuserrole',
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

module.exports = AppUserRole;