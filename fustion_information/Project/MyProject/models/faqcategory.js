var Sequelize = require('sequelize');
var sequelize = require('../common/mysql');

var faqCategory = sequelize.define('faqcategory',{
    faqcategoryID: {
        type: Sequelize.INTEGER(3),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    faqcategoryName: {
        type: Sequelize.STRING(100),
        allowNull: false,
        unique: true
    },
    faqcategoryRemarks: {
        type: Sequelize.STRING(200),
        allowNull: true,

    },
    faqcategoryStatus: {
        type: Sequelize.ENUM('Active','InActive'),
        allowNull: false,
        defaultValue: 'Active'

    }
},
{
    tableName: 'faqcategory',
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

module.exports = faqCategory;