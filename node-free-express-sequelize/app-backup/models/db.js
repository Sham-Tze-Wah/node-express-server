'use strict';

const Sequelize = require('sequelize');

const { mysqlUrl } = require('../config');

const sequelize = new Sequelize(mysqlUrl, {
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    },
    logging: console.log
});

module.exports = sequelize;

// module.exports = (sequelize, Sequelize) => {
//     const Tutorial = sequelize.define("tutorial", {
//       title: {
//         type: Sequelize.STRING
//       },
//       description: {
//         type: Sequelize.STRING
//       },
//       published: {
//         type: Sequelize.BOOLEAN
//       }
//     });
  
//     return Tutorial;
//   };
  