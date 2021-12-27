'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
     return queryInterface.bulkInsert('optionshs', [
      {
        name: 'DESARROLLO DE SOFTWARE',
        typeHs_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        name: 'GENERAL',
        typeHs_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      }]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     return queryInterface.bulkDelete('optionshs', null, {});
  }
};
