const Sequelize = require('sequelize');
const sequelize = require('../../../DB/connection');
const DS = require('../../../services/date')
const driverLocation = sequelize.define(
    'driver_location',
    {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
        },
        driver_id : {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: 'tbl_driver', 
                key: 'id', 
             }
        },
        latitude : {
            type: Sequelize.DOUBLE,
            allowNull: false,
        },
        longitude : {
            type: Sequelize.DOUBLE,
            allowNull: false,
        },
        available: {
            type: Sequelize.ENUM,
                values: [
                    'Yes',
                    'No',
                ],
                defaultValue: 'Yes',
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
        console.log('driver_location table created');
    })
    .catch((err) => {
        console.log(err);
    });

module.exports = driverLocation;
