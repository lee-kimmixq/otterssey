module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('game_users', [
      {
        game_id: 1,
        user_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        game_id: 2,
        user_id: 2,
        created_at: new Date(),
        updated_at: new Date(),
      }]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('game_users', null);
  },
};
