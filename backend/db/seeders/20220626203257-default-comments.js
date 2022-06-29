'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.bulkInsert('Comments', [{
     userId: 1,
     storyId: 3,
     body: 'this story made me pee myself super spooky',
     createdAt: new Date(),
     updatedAt: new Date()
   },
   {
    userId: 2,
    storyId: 3,
    body: 'thank you @ Demo-lition, I worked weally hard on it uwu',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    userId: 3,
    storyId: 4,
    body: 'boring and not spooky at all :p',
    createdAt: new Date(),
    updatedAt: new Date()
  }], {});
  },

  down: (queryInterface, Sequelize) => {
   return queryInterface.bulkDelete('Comments', null, {});
  }
};
