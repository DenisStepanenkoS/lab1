const { Pool } = require('pg');
const user = require('./user');


const connectionOptions = {
  user: 'postgres',
  host: 'localhost',
  database: 'lab1',
  password: 'admin',
  port: 5432,
};

const pool = new Pool(connectionOptions);
pool.connect(err => {
  if (err) {
    console.error('Connection error:', err.stack);
  } else {
    console.log('DB connection OK');
  }
});

process.on('beforeExit', () => pool.end());

user.pool = pool;

module.exports = { user };