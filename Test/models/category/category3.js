const Sequelize = require('sequelize');
const sequelize = require('../../database/database');
const DS = require('../../services/date')
const Category3 = sequelize.define(
    'tbl_category3',
    {
        category3ID: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
        },
        category2ID: {
            type: Sequelize.INTEGER,
        },
        Name: {
            type: Sequelize.STRING(100),
        },
        createdAt: {
            type: Sequelize.DATE,
        },
        updatedAt: {
            type: Sequelize.DATE,
        },
    },
    {
        freezeTableName: true,
        beforeCreate: function (valuesToSet, proceed) {
            valuesToSet.createdAt = DS.now()
            valuesToSet.updatedAt = DS.now()
            proceed();
        },
        beforeUpdate: function (valuesToSet, proceed) {
            valuesToSet.updatedAt = DS.now()
            proceed();
        }
    }
);
sequelize
    .sync()
    .then((result) => {
        console.log('Category3 table created');
    })
    .catch((err) => {
        console.log(err);
    });

module.exports = Category3;
