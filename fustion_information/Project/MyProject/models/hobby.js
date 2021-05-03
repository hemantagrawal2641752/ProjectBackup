var Sequelize = require('sequelize');
var sequelize = require('../common/mysql');

var Hobby = sequelize.define('hobby',{
    hobbyID: {
        type: Sequelize.INTEGER(3),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    hobbyName: {
        type: Sequelize.STRING(100),
        allowNull: false,
        unique: true
    },
    hobbyRemarks: {
        type: Sequelize.STRING(200),
        allowNull: true,

    },
    hobbyStatus: {
        type: Sequelize.ENUM('Active','InActive'),
        allowNull: false,
        defaultValue: 'Active'

    },
    hobbyCreatedDate: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    } 
},
{
    tableName: 'hobby',
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

module.exports = Hobby;