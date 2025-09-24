'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
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
      },
      {
        name: 'Evening yin yoga to relax',
        slug: 'evening-yin-yoga-to-relax',
        image: 'evening.jpg',
        body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        published: '2020-04-14 15:02:41',
        author_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Secrets of a yoga teacher',
        slug: 'secrets-of-a-yoga-teacher',
        image: 'yoga-teacher.jpg',
        body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        published: '2020-04-14 15:02:41',
        author_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Yoga and Nature',
        slug: 'yoga-and-nature',
        image: 'yoga-and-nature.jpg',
        body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        published: '2020-04-14 15:02:41',
        author_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Articles', null, {});
  }
};
