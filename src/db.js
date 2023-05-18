const { Pool } = require("pg");
require('dotenv').config();

const pool = new Pool({
    host: process.env.db_host,
    user: process.env.db_user,
    port: process.env.db_port,
    password: process.env.db_password,
    database: process.env.db_database,
  });
  
  module.exports = { pool }