'use strict';
const bcrypt = require('bcryptjs');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        email: 'demo@user.io',
        username: 'Demo-lition',
        hashedPassword: bcrypt.hashSync('password')
      },
      {
        email: 'raven@user.io',
        username: 'EdgarAllenPoe',
        hashedPassword: bcrypt.hashSync('password2')
      },
      {
        email: 'noSleep@user.io',
        username: 'noSleep',
        hashedPassword: bcrypt.hashSync('password3')
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Users', {
      username: { [Op.in]: ['Demo-lition', 'EdgarAllenPoe', 'noSleep'] }
    }, {});
  }
};
