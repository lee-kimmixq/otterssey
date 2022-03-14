import sequelizePackage from 'sequelize';
import allConfig from '../database/config/config.js';

import initUserModel from './user.mjs';
import initGameModel from './game.mjs';
import initGameUserModel from './gameUser.mjs';
import initTownModel from './town.mjs';
import initPathModel from './path.mjs';

const { Sequelize } = sequelizePackage;
const env = process.env.NODE_ENV || 'development';
const config = allConfig[env];
const db = {};

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config,
);

db.User = initUserModel(sequelize, Sequelize.DataTypes);
db.Game = initGameModel(sequelize, Sequelize.DataTypes);
db.GameUser = initGameUserModel(sequelize, Sequelize.DataTypes);
db.Town = initTownModel(sequelize, Sequelize.DataTypes);
db.Path = initPathModel(sequelize, Sequelize.DataTypes);

db.User.belongsToMany(db.Game, { through: db.GameUser });
db.Game.belongsToMany(db.User, { through: db.GameUser });
db.User.hasMany(db.GameUser);
db.GameUser.belongsTo(db.User);
db.Game.hasMany(db.GameUser);
db.GameUser.belongsTo(db.Game);

db.Town.hasMany(db.Path, { as: 'startPath', foreignKey: 'startId' });
db.Town.hasMany(db.Path, { as: 'endPath', foreignKey: 'endId' });
db.Path.belongsTo(db.Town, { as: 'startTown', foreignKey: 'startId' });
db.Path.belongsTo(db.Town, { as: 'endTown', foreignKey: 'endId' });

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
