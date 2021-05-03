/* jshint indent: 2 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {userlocationInstance, userlocationAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
  return sequelize.define<userlocationInstance, userlocationAttribute>('userlocation', {
    userlocationID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    userID: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    countryID: {
      type: DataTypes.INTEGER(3),
      allowNull: false
    },
    userlocationPincode: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    cityID: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    userlocationType: {
      type: DataTypes.STRING(20),
      allowNull: false
    }
  }, {
    tableName: 'userlocation'
  });
};
