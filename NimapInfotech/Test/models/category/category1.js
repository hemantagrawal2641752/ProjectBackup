const Sequelize = require('sequelize');
const sequelize = require('../../database/database');
const DS = require('../../services/date')
const Category1 = sequelize.define(
    'tbl_category1',
    {
        category1ID: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
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
        console.log('Category1 table created');
    })
    .catch((err) => {
        console.log(err);
    });

module.exports = Category1;
