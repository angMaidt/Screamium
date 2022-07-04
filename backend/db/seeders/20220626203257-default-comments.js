'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.bulkInsert('Comments', [{
     userId: 1,
     storyId: 1,
     body: 'This story was super spooky, I loved it',
     createdAt: new Date(),
     updatedAt: new Date()
   },
  {
    userId: 2,
    storyId: 1,
    body: 'Fantastic story, I really liked the way the protagonist seemed to utterly lose all hope at the end. Inspiring',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    userId: 3,
    storyId: 1,
    body: 'boring and not spooky at all :p',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    userId: 1,
    storyId: 1,
    body: 'This story was super spooky, I loved it',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    userId: 2,
    storyId: 1,
    body: 'Fantastic story, I really liked the way the protagonist seemed to utterly lose all hope at the end. Inspiring',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    userId: 3,
    storyId: 1,
    body: 'boring and not spooky at all :p',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    userId: 1,
    storyId: 1,
    body: 'This story was super spooky, I loved it',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    userId: 2,
    storyId: 1,
    body: 'Fantastic story, I really liked the way the protagonist seemed to utterly lose all hope at the end. Inspiring',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    userId: 3,
    storyId: 1,
    body: 'boring and not spooky at all :p',
    createdAt: new Date(),
    updatedAt: new Date()
  },

  {
    userId: 1,
    storyId: 2,
    body: 'This story was super spooky, I loved it',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    userId: 2,
    storyId: 2,
    body: 'Fantastic story, I really liked the way the protagonist seemed to utterly lose all hope at the end. Inspiring',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    userId: 3,
    storyId: 2,
    body: 'boring and not spooky at all :p',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    userId: 1,
    storyId: 3,
    body: 'This story was super spooky, I loved it',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    userId: 2,
    storyId: 3,
    body: 'Fantastic story, I really liked the way the protagonist seemed to utterly lose all hope at the end. Inspiring',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    userId: 3,
    storyId: 3,
    body: 'boring and not spooky at all :p',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    userId: 1,
    storyId: 4,
    body: 'This story was super spooky, I loved it',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    userId: 2,
    storyId: 4,
    body: 'Fantastic story, I really liked the way the protagonist seemed to utterly lose all hope at the end. Inspiring',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    userId: 3,
    storyId: 4,
    body: 'boring and not spooky at all :p',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    userId: 2,
    storyId: 5,
    body: 'Fantastic story, I really liked the way the protagonist seemed to utterly lose all hope at the end. Inspiring',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    userId: 3,
    storyId: 5,
    body: 'boring and not spooky at all :p',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    userId: 2,
    storyId: 6,
    body: 'Fantastic story, I really liked the way the protagonist seemed to utterly lose all hope at the end. Inspiring',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    userId: 3,
    storyId: 6,
    body: 'boring and not spooky at all :p',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    userId: 2,
    storyId: 6,
    body: 'Fantastic story, I really liked the way the protagonist seemed to utterly lose all hope at the end. Inspiring',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    userId: 3,
    storyId: 6,
    body: 'boring and not spooky at all :p',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    userId: 2,
    storyId: 7,
    body: 'Fantastic story, I really liked the way the protagonist seemed to utterly lose all hope at the end. Inspiring',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    userId: 3,
    storyId: 7,
    body: 'boring and not spooky at all :p',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    userId: 2,
    storyId: 8,
    body: 'Fantastic story, I really liked the way the protagonist seemed to utterly lose all hope at the end. Inspiring',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    userId: 3,
    storyId: 8,
    body: 'boring and not spooky at all :p',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  ], {});
    },

  down: (queryInterface, Sequelize) => {
   return queryInterface.bulkDelete('Comments', null, {});
  }
};
