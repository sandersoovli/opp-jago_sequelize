'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Authors', [
  {
    name: 'Ashley Galvin',
    email: 'ashley.galvin@localhost',
    createdAt: new Date('2020-04-14 15:02:41'),
    updatedAt: new Date()
  },
 {
    name: 'Ashley Galvin',
    email: 'ashley.galvin@localhost',
    createdAt: new Date ('2060-05-28 15:02:55'),
    updatedAt: new Date()
  },
 {
    name: 'MacKenzie Miller',
    email: 'macKenzie.mille@localhost',
    createdAt: new Date ('2025-09-11 06:11:01'),
    updatedAt: new Date()
 },

]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
