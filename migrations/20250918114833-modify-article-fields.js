'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.changeColumn('Articles', 'id', {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    });
    await queryInterface.changeColumn('Articles', 'name', {
      type: Sequelize.STRING,
      allowNull: false
    });
    await queryInterface.changeColumn('Articles', 'slug', {
      type: Sequelize.STRING,
      allowNull: false
    });
    await queryInterface.changeColumn('Articles', 'image', {
      type: Sequelize.TEXT,
      allowNull: false
    });
    await queryInterface.changeColumn('Articles', 'body', {
      type: Sequelize.TEXT,
      allowNull: false
    });
    await queryInterface.changeColumn('Articles', 'published', {
      allowNull: false,
      type: Sequelize.DATE
    });
    await queryInterface.changeColumn('Articles', 'author_id', {
      type: Sequelize.INTEGER,
    });
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable('Articles');
  }
};
