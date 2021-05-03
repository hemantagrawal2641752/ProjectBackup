/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('stream', {
    streamID: {
      type: DataTypes.INTEGER(3),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    streamName: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: true
    },
    streamRemarks: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    streamStatus: {
      type: DataTypes.ENUM('Active','Inactive'),
      allowNull: false
    },
    streamCreatedDate: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    tableName: 'stream',
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
  return stream;
};
