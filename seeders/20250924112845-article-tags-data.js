'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('ArticleTags', [
      { articleId: 1, tagId: 1, createdAt: new Date(), updatedAt: new Date() },
      { articleId: 1, tagId: 2, createdAt: new Date(), updatedAt: new Date() },
      { articleId: 2, tagId: 3, createdAt: new Date(), updatedAt: new Date() },
      { articleId: 3, tagId: 1, createdAt: new Date(), updatedAt: new Date() },
      { articleId: 4, tagId: 2, createdAt: new Date(), updatedAt: new Date() }
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('ArticleTags', null, {});
  }
};
