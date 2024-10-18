// server.js
const express = require('express');
const http = require('http');
const mysql = require('mysql2');
const app = express();

// Middleware to parse JSON requests
app.use(express.json());

// Create a MySQL connection
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root', // XAMPP default username
    password: '', // XAMPP default has no password
    database: 'privatetutor' // Name of the database you created in phpMyAdmin
});

// Log when the server starts
console.log("Server is starting...");

const PORT = process.env.PORT || 3000; // Use port 3000 or an environment-defined port

const server = http.createServer(app);

// Start the server
server.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});



// Connect to the database
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err.stack);
    return;
  }
  console.log('Connected to the database');
});

module.exports = connection;
