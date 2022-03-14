/* eslint-disable new-cap */

const jsSHA = require('jssha');

const getHash = (input) => {
  const shaObj = new jsSHA('SHA-512', 'TEXT', { encoding: 'UTF8' });
  shaObj.update(`${input}-${process.env.SALT}`);
  return shaObj.getHash('HEX');
};

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('users', [{
      username: 'bishanclan',
      password: getHash('bishanclan'),
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      username: 'marinaclan',
      password: getHash('marinaclan'),
      created_at: new Date(),
      updated_at: new Date(),
    }]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('users', null);
  },
};
