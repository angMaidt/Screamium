'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.bulkInsert('Stories', [{
     authorId: 2,
     title: 'The Raven',
     body: 'This is the text of The Raven by Edgar Allen Poe',
     createdAt: new Date(),
     updatedAt: new Date(),
     imageUrl: 'https://cindyknoke.files.wordpress.com/2015/10/dsc05591.jpg'
   },
   {
    authorId: 3,
    title: '2 Sentence Horror',
    body: 'The last man on Earth sat alone in a room. There was a knock on the door ...',
    createdAt: new Date(),
    updatedAt: new Date(),
    imageUrl: 'https://img-9gag-fun.9cache.com/photo/aPWYemV_460s.jpg'
  }], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkDelete('Stories', null, {});
  }
};
