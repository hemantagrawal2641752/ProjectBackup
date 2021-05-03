const Sequelize = require('sequelize');
const sequelize = require('../../../DB/connection');
const DS = require('../../../services/date')
const Student = sequelize.define(
    'tbl_Student',
    {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
        },
        firstName: {
            type: Sequelize.STRING(50),
            allowNull: false
        },
        lastName: {
            type: Sequelize.STRING(50),
            allowNull: false
        },
        email: {
            type: Sequelize.STRING(100),
            unique: {
                args: true,
                msg: 'Email already in use!'
            },
            allowNull: false
        },
        mobileNumber: {
            type: Sequelize.STRING(50),
            unique: {
                args: true,
                msg: 'Mobile already in use!'
            },
            allowNull: false
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
        console.log('Student table created');
    })
    .catch((err) => {
        console.log(err);
    });

module.exports = Student;
