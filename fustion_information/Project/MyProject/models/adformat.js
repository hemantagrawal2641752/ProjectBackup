var Sequelize = require('sequelize');
var sequelize = require('../common/mysql');

var ADformat = sequelize.define('adformats',{
    adformatID: {
        type: Sequelize.INTEGER(3),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    adformatName: {
        type: Sequelize.STRING(100),
        allowNull: false,
        unique: true
    },
    adformatRemarks: {
        type: Sequelize.STRING(200),
        allowNull: true
        },
    adformatStatus: {
        type: Sequelize.ENUM('Active', 'InActive'),
        allowNull: false,
        defaultValue: 'Active'

        },
    adformatCreatedDate: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')

        }
},{
    tableName: 'adformats',
    underscored: true,
    timestamps: false,
    createdAt: false,
    paranoid: true
},{
    classMethods: {
        associate: function(models){

        }
    }
}
);

module.exports = ADformat;