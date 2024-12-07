const bcrypt = require('bcrypt');
class user {
    static async create({ username, email, password }) {
        try {
          
          const saltRounds = 10;
          const hashPassword = await bcrypt.hash(password, saltRounds);
          const role = 'reporter';
          
          const insertQuery = `
            INSERT INTO users (username, email, password, role)
            VALUES ($1, $2, $3, $4)
            RETURNING *
          `;
          const createdUser = await user.pool.query(insertQuery, [username, email, hashPassword, role]);
          
          return createdUser.rows[0];
        } catch (err) {
          throw new Error(err.message || 'An error occurred while creating the user.');
        }
      }
    static async getAll() {
        try {
          const selectAllQuery = `
            SELECT *
            FROM users
            ORDER BY user_id
          `;
          const foundUsers = await user.pool.query(selectAllQuery);
          return foundUsers.rows;
        } catch (err) {
          throw new Error(err.message || 'An error occurred while fetching customers.');
        }
      }
      
  
  }
  
  module.exports = user;