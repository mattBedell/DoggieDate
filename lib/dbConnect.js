const pgp = require('pg-promise')();

const config = {
  host:      process.env.DB_HOST,
  port:      process.env.DB_PORT,
  database:  process.env.DB_DATABASE,
  user:      process.env.DB_USER,
  password:  process.env.DB_PASSWORD
};
console.log(config)
const db = pgp(config);

module.exports = db;
