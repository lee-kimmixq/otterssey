module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('games', [{
      game_state: JSON.stringify({ playerItems: [{ id: 1, type: 'a' }, { id: 2, type: 'b' }, { id: 3, type: 'c' }], test: 'test1' }),
      is_active: true,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      game_state: JSON.stringify({ playerItems: [{ id: 1, type: 'd' }, { id: 2, type: 'e' }, { id: 3, type: 'f' }], test: 'test2' }),
      is_active: true,
      created_at: new Date(),
      updated_at: new Date(),
    }]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('games', null);
  },
};
