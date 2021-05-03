const Sequelize = require('sequelize');
const sequelize = require('../../../DB/connection');
const DS = require('../../../services/date')
const Driver = sequelize.define(
    'tbl_driver',
    {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
        },
        name: {
            type: Sequelize.STRING(30),
            allowNull: false
        },
        email: {
            type: Sequelize.STRING(50),
            unique: {
                args: true,
                msg: 'Email address already in use!'
            },
            allowNull: false,
            validate: {
                isEmail: true
            },
        },
        phone_number: {
            type: Sequelize.INTEGER,
            unique:true,
            allowNull: false,
            validate: {
                isNumeric: true,
                len: {
                    args: [10, 10],
                    msg: "Number length is not in this range"
                },
            },
        },
        license_number: {
            type: Sequelize.STRING(50),
            unique: true,
            allowNull: false,
        },
        car_number: {
            type: Sequelize.STRING(50),
            unique: true,
            allowNull: false,
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
        console.log('driver table created');
    })
    .catch((err) => {
        console.log(err);
    });

module.exports = Driver;
