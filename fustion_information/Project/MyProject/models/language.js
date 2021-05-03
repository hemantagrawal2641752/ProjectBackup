var Sequelize = require('sequelize');
var sequelize = require('../common/mysql');

var Language = sequelize.define('language',{
    languageID: {
        type: Sequelize.INTEGER(3),
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    languageName: {
        type: Sequelize.STRING(100),
        allowNull: false,
        unique: true
    },
    languageRemarks: {
        type: Sequelize.STRING(200),
        allowNull: true
    },
    languageStatus: {
        type: Sequelize.ENUM('Active', 'InActive'),
        allowNull: false,
        defaultValue: 'Active'
    },
    languageCreatedDate: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    }
},
{
    tableName: 'language',
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

module.exports = Language;