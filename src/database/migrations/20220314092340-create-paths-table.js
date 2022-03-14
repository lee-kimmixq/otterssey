module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('paths', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      start_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'towns',
          key: 'id',
        },
      },
      end_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'towns',
          key: 'id',
        },
      },
      x_position: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      y_position: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('paths');
  },
};
