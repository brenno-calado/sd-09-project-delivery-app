'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('sales', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    user_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
      references: { model: 'users', key: 'id' },
    },
    seller_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
      references: { model: 'users', key: 'id' },
    },
      total_price: { type: Sequelize.DECIMAL(9,2), allowNull: false },
      delivery_address: { type: Sequelize.STRING(100), allowNull: false },
      delivery_number: { type: Sequelize.STRING(50), allowNull: false },
      sale_date: { type: Sequelize.DATE, allowNull: false },
      status: { type: Sequelize.STRING(50), allowNull: false },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('sales');
  }
};
