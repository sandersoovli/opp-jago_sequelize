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
    await queryInterface.bulkInsert('Articles', [
  {
    name: 'Morning vinyasa flow routine',
    slug: 'morning-vinyasa-flow-routine',
    image: 'morning.jpg',
    body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    published: '2020-04-14 15:02:41',
    author_id: 1,
    createdAt: new Date(),
    updatedAt: new Date()
  }
]);
    await queryInterface.bulkInsert('Articles', [
  {
    name: 'Evening yin yoga to relax',
    slug: 'evening-yin-yoga-to-relax',
    image: 'evening.jpg',
    body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    published: '2020-04-14 15:02:41',
    author_id: 1,
    createdAt: new Date(),
    updatedAt: new Date()
  }
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
