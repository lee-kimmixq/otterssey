export default function initPathModel(sequelize, DataTypes) {
  return sequelize.define(
    'path',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      startId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: 'towns',
          key: 'id',
        },
      },
      endId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: 'towns',
          key: 'id',
        },
      },
      xPosition: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      yPosition: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
    },
    {
      underscored: true,
    },
  );
}
