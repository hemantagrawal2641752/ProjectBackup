var Sequelize = require('sequelize');
var sequelize = require('../common/mysql');

var SecurityQuestions = sequelize.define('securityquestions',{
    secquestionID: {
        type: Sequelize.INTEGER(3),
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    
    secquestionName: {
        type: Sequelize.STRING(100),
        allowNull: false,
        unique: true
    },
    secquestionRemarks: {
        type: Sequelize.STRING(200),
        allowNull: true
    },
    secquestionStatus: {
        type: Sequelize.ENUM('Active', 'InActive'),
        allowNull: false,
        defaultValue: 'Active'
    },
    secquestionCreatedDate: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    }
},
{
    tableName: 'securityquestions',
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

module.exports = SecurityQuestions;