module.exports = {
  development: {
    username: process.env.USERNAME,
    password: process.env.PASSWORD,
    database: 'otterssey_development',
    host: '127.0.0.1',
    dialect: 'postgres',
    seederStorage: 'sequelize',
  },
};
