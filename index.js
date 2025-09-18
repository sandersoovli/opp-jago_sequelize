const express = require('express');
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Database connection setup (example with Sequelize)
const { Sequelize } = require('sequelize');


const sequelize = new Sequelize('joga_sequelize', 'root', 'qwerty', {
  host: 'localhost',
  dialect: 'mysql' //| 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
});

sequelize.authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');   
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });
    
// Sample route
app.get('/', (req, res) => {
  res.json({message: 'Welcome to sequelize app'});
});

// Start the server
app.listen(3025, () => {
  console.log('Server is running at http://localhost:3025');
});