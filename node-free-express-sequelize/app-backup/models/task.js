// 'use strict';

// const Sequelize = require('sequelize');
// const sequelize = require('./db');

// const { Model } = Sequelize;

// class Task extends Model {

//     read(filter) {
//         return Task.findAll({ where: filter });
//     }

//     readOne(filter) {
//         return Task.findOne({ where: filter });
//     }

//     add(data) {
//         return Task.create(data);
//     }

//     update(data, filter) {
//         return Task.update(data, { where: filter });
//     }

//     delete(filter) {
//         return Task.destroy({ where: filter });
//     }
// }

// Task.init({
//     id: {
//         type: Sequelize.BIGINT,
//         allowNull: false,
//         primaryKey: true,
//         autoIncrement: true,
//         field: 'id'
//     },
//     name: {
//         type: Sequelize.STRING(60),
//         allowNull: false,
//         defaultValue: '',
//         field: 'name'
//     },
//     desc: {
//         type: Sequelize.STRING(255),
//         allowNull: false,
//         defaultValue: '',
//         field: 'desc'
//     }
// }, {
//     sequelize,
//     tableName: 'tasks',
//     timestamps: false,
//     freezeTableName: true
// });

// module.exports = Task;

// const dbConfig = require("../config/db.config.js");

// const Sequelize = require("sequelize");
// const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
//   host: dbConfig.HOST,
//   dialect: dbConfig.dialect,
//   operatorsAliases: false,

//   pool: {
//     max: dbConfig.pool.max,
//     min: dbConfig.pool.min,
//     acquire: dbConfig.pool.acquire,
//     idle: dbConfig.pool.idle
//   }
// });

// const db = {};

// db.Sequelize = Sequelize;
// db.sequelize = sequelize;

// db.tutorials = require("./tutorial.model.js")(sequelize, Sequelize);

// module.exports = db;

const dbConfig = require("../config/index.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.tutorials = require("./tasks.js")(sequelize, Sequelize);

module.exports = db;

