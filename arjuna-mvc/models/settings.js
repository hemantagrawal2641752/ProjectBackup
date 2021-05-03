/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('settings', {
    settingsID: {
      type: DataTypes.INTEGER(3),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    settingsEmailFrom: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: ''
    },
    settingsEmailTo: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: ''
    },
    settingsEmailGateway: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    settingEmailID: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    settingsEmailPass: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    settingsSSL: {
      type: DataTypes.ENUM('Yes','No'),
      allowNull: false
    },
    settingsTLS: {
      type: DataTypes.ENUM('Yes','No'),
      allowNull: false
    },
    settingEmailPort: {
      type: DataTypes.INTEGER(3),
      allowNull: false
    },
    settingSenderName: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    settingPGMode: {
      type: DataTypes.ENUM('Sandbox','Live'),
      allowNull: false
    },
    settingsPGSandboxUrl: {
      type: DataTypes.STRING(250),
      allowNull: false
    },
    settingPGSandboxCustomerKey: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    settingsPGSandboxCustomerAuth: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    settingsPGLiveUrl: {
      type: DataTypes.STRING(250),
      allowNull: false
    },
    settingPGLiveCustomerKey: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    settingPGLiveCustomerAuth: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    settingsUserResetPinLinkExpHr: {
      type: DataTypes.INTEGER(2),
      allowNull: false,
      defaultValue: '24'
    },
    settingsDefaultMarkup: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: '0.00'
    },
    settingsConvienceCharge: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    setting1USD: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    settingsLogDeleteDays: {
      type: DataTypes.INTEGER(3),
      allowNull: false,
      defaultValue: '90'
    },
    settingsSMSGateway: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    settingsSMSSenderName: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    settingsSMSUsername: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    settingsSMSPassword: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    settingsSalesNo: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    settingsSupportNo: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    settingsMapKey: {
      type: DataTypes.STRING(300),
      allowNull: true
    },
    settingsAnyalticsKey: {
      type: DataTypes.STRING(300),
      allowNull: true
    },
    settingsPushKey: {
      type: DataTypes.STRING(300),
      allowNull: true
    }
  }, {
    tableName: 'settings'
  });
};
