const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root', // XAMPP default username
  password: '', // XAMPP default has no password
  database: 'privatetutor' // Name of the database you created in phpMyAdmin
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err.stack);
    return;
  }
  console.log('Connected to the database');
});

module.exports = connection;
