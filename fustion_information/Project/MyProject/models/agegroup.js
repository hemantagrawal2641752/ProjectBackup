var Sequelize = require('sequelize');
var sequelize = require('../common/mysql');

var AgeGroup = sequelize.define('agegroup', {
    agegroupID: {
        type: Sequelize.INTEGER(3),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    
    },
    agegroupFrom: {
        type: Sequelize.INTEGER(3),
        allowNull: false
    },
    agegroupTo: {
        type: Sequelize.INTEGER(3),
        allowNull: false
    },
    agegroupRemark: {
        type: Sequelize.STRING(200),
        allowNull: true
    },
    agegroupStatus: {
        type: Sequelize.ENUM('Active', 'InActive'),
        allowNull: false,
        defaultValue: 'Active'
    },
    agegroupCreatedDate: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    }
}, {
    tableName: 'agegroup',
    underscored: true,
	timestamps: false,
	createAt: false,
	paranoid: true
}, {
    classMethods: {
        associate: function(Models){

        }
    }
});

module.exports = AgeGroup;