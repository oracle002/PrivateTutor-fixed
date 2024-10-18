var express = require('express');
var router = express.Router();
const mysql = require('mysql2');

// Create a MySQL connection
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root', // XAMPP default username
    password: '', // XAMPP default has no password
    database: 'privatetutor' // Name of the database you created in phpMyAdmin
});

// Route to get all districts
router.get('/', (req, res, next) => {
    let query = 'SELECT * FROM tbl_district';

    // Use 'connection' consistently here
    connection.query(query, (err, rows) => {
        if (err) {
            console.error(err); // Log the error for debugging
            return res.status(500).send('Error querying the database.'); // Send an error response
        }
        res.send(rows); // Send the rows as a response
        console.log(rows); // Log the rows to the console
    });
});

// Export the router to use it in your app
module.exports = router;
