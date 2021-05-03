/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('institute', {
    instituteID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    instituteName: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: true
    },
    instituteContactName: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    instituteEmailExtension: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    institutePhone: {
      type: DataTypes.STRING(70),
      allowNull: false
    },
    instituteAddress: {
      type: DataTypes.STRING(300),
      allowNull: false
    },
    institutePincode: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    countryID: {
      type: DataTypes.INTEGER(3),
      allowNull: false
    },
    stateID: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    cityID: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    instituteStatus: {
      type: DataTypes.ENUM('Active','Inactive'),
      allowNull: false
    },
    instituteCreatedDate: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    tableName: 'institute',
	underscored: true,
	timestamps: false,
	createAt: false,
	paranoid: true
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
	return institute;
};
