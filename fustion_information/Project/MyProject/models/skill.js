var Sequelize = require('sequelize');
var sequelize = require('../common/mysql');

var Skill = sequelize.define('skill',{
    skillID: {
        type: Sequelize.INTEGER(3),
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    skillName: {
        type: Sequelize.STRING(50),
        allowNull: false,
        unique: true
    },
    skillRemarks: {
        type: Sequelize.STRING(200),
        allowNull: true
    },
    skillStatus: {
        type: Sequelize.ENUM('Active', 'InActive'),
        allowNull: false,
        defaultValue: 'Active'
    },
    skillCreatedDate: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    }
},
{
    tableName: 'skill',
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

module.exports = Skill;