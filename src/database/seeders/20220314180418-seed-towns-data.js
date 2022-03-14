module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('towns', [
      {
        name: 'tuas',
        x_position: 8,
        y_position: 70,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'lim chu kang',
        x_position: 26,
        y_position: 20,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'choa chu kang',
        x_position: 30,
        y_position: 41,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'jurong east',
        x_position: 28,
        y_position: 57,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'woodlands',
        x_position: 37,
        y_position: 17,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'bukit timah',
        x_position: 40,
        y_position: 56,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'queenstown',
        x_position: 39,
        y_position: 70,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'yishun',
        x_position: 50,
        y_position: 25,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'bishan',
        x_position: 49,
        y_position: 47,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'downtown',
        x_position: 51,
        y_position: 69,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'sentosa',
        x_position: 48,
        y_position: 86,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'punggol',
        x_position: 63,
        y_position: 29,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'hougang',
        x_position: 59,
        y_position: 43,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'bedok',
        x_position: 67,
        y_position: 60,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'changi',
        x_position: 81,
        y_position: 50,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('towns', null);
  },
};
