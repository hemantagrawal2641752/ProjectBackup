const Sequelize = require('sequelize');
const sequelize = require('../../database/database');
const DS = require('../../services/date')
const Cart = sequelize.define(
    'tbl_cart',
    {
        cartID: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
        },
        userID: {
            type: Sequelize.INTEGER,
        },
        totalQuantity: {
            type: Sequelize.INTEGER,
        },
        netAmount: {
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
        console.log('Cart table created');
    })
    .catch((err) => {
        console.log(err);
    });

module.exports = Cart;
