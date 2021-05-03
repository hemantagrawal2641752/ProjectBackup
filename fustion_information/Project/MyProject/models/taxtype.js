var Sequelize = require('sequelize');
var sequelize = require('../common/mysql');

var TaxType = sequelize.define('taxtype',{
    taxtypeID: {
        type: Sequelize.INTEGER(3),
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    taxtypeName: {
        type: Sequelize.STRING(50),
        allowNull: false,
        unique: true
    },
    taxtypeRemarks: {
        type: Sequelize.STRING(200),
        allowNull: true
    },
    taxtypestatus: {
        type: Sequelize.ENUM('Active', 'InActive'),
        allowNull: false,
        defaultValue: 'Active'
    },
    taxtypeCreatedDate: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    }
},
{
    tableName: 'taxtype',
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

module.exports = TaxType;