'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.addColumn(
    'Stories',
    'genreId',
     {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: { model: 'Genres' }
    });
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.removeColumn('Stories', 'genreId');
  }
};
