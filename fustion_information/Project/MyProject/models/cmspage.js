var Sequelize = require('sequelize');
var sequelize = require('../common/mysql');

var CMSPage = sequelize.define('cmspage',{
    cmspageID: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    cmspageName: {
        type: Sequelize.STRING(100),
        allowNull: false,
        unique: true
    },
    cmspageImage: {
        type: Sequelize.STRING(200),
        allowNull: false,

    },
    cmspageContents: {
        type: Sequelize.TEXT,
        allowNull: false,

    },
    cmspageIsSystemPage: {
        type: Sequelize.ENUM('Yes','No'),
        allowNull: false,
        defaultValue: 'Yes'
      },
    cmspageStatus: {
        type: Sequelize.ENUM('Active','InActive'),
        allowNull: false,
        defaultValue: 'Active'

    },
    cmspageCreatedDate: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    } 
},
{
    tableName: 'cmspage',
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

module.exports = CMSPage;