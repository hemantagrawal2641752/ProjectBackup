const Sequelize = require('sequelize');
const sequelize = require('../../database/database');
const DS = require('../../services/date')
const Users = sequelize.define(
    'tbl_users',
    {
        userID: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
        },
        userName: {
            type: Sequelize.STRING(30),
        },
        userEmail: {
            type: Sequelize.STRING(50),
            validate: {
                isEmail: true,
            },
            unique: true,
        },
        userPassword: {
            type: Sequelize.STRING(100),
        },
        userMobile: {
            type: Sequelize.STRING(10),
            unique: true,
            validate: {
                isNumeric: true
            }
        },
        userRoleID: {
            type: Sequelize.ENUM('Admin', 'User'),
            defaultValue: 'User',
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
        console.log('users table created');
    })
    .catch((err) => {
        console.log(err);
    });

module.exports = Users;
