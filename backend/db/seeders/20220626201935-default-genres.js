'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkInsert('Genres', [
   {
     name: 'Classic Horror',
     createdAt: new Date(),
     updatedAt: new Date(),
   },
   {
    name: 'Weird Tales',
    createdAt: new Date(),
    updatedAt: new Date(),
   },
   {
    name: 'Dark Fantasy',
    createdAt: new Date(),
    updatedAt: new Date(),
   },
   {
    name: 'Sci-Fi Horror',
    createdAt: new Date(),
    updatedAt: new Date(),
   },
   {
    name: 'Psychological',
    createdAt: new Date(),
    updatedAt: new Date(),
   },
   {
    name: 'Supernatural',
    createdAt: new Date(),
    updatedAt: new Date(),
   }
  ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkDelete('Genres', null, {});
  }
};
