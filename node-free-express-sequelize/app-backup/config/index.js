'use strict';

// module.exports = {
//     port: process.env.PORT || 3000,
//     mysqlUrl: process.env.DB_CONNECTION_STRING  
// };

const dbConfig = {
    mysqlUrl: process.env.DB_CONNECTION_STRING,
    HOST: "mysql.db.mdbgo.com",
    USER: "tzewah_root",
    PASSWORD: "Azd2020!",
    DB: "tzewah_testdb",
    dialect: "mysql"
  };

  module.exports = dbConfig;
  