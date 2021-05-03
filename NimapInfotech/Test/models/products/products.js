const Sequelize = require('sequelize');
const sequelize = require('../../database/database');
const DS = require('../../services/date')
const Product = sequelize.define(
    'tbl_products',
    {
        productsID: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
        },
        category3ID: {
            type: Sequelize.INTEGER,
        },
        Name: {
            type: Sequelize.STRING(500),
        },
        Price: {
            type: Sequelize.INTEGER,
        },
        Quantity: {
            type: Sequelize.INTEGER,
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
        console.log('Products table created');
    })
    .catch((err) => {
        console.log(err);
    });

module.exports = Product;
