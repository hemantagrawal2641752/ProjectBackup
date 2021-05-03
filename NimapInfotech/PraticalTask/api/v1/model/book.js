const Sequelize = require('sequelize');
const sequelize = require('../../../DB/connection');
const DS = require('../../../services/date')
const Books = sequelize.define(
    'tbl_book',
    {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
        },
        title: {
            type: Sequelize.STRING(50),
            unique: {
                args: true,
                msg: 'Title already in use!'
            },
            allowNull: false
        },
        description: {
            type: Sequelize.TEXT('long'),
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
        console.log('Book table created');
    })
    .catch((err) => {
        console.log(err);
    });

module.exports = Books;
