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

// Ensure connection to MySQL
connection.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        return;
    }
    console.log('Connected to MySQL.');
});

/* Tutor Registration */
router.post('/', (req, res) => {
    const {
        tutor_name,
        tutor_phoneno,
        tutor_email,
        tutor_password,
        qualification_id,
        district_id,
        tutor_gender,
        date_of_registration,
        tutor_status
    } = req.body;

    // Query to check if the tutor already exists
    let query = 'SELECT * FROM tbl_tutorregistration WHERE tutor_name = ?';
    connection.query(query, [tutor_name], (err, rows) => {
        if (err) {
            console.error('Error executing query:', err);
            return res.status(500).send({ message: 'Internal server error' });
        }

        if (rows.length === 0) {
            // Insert the tutor's data
            let insertQuery = 'INSERT INTO tbl_tutorregistration (tutor_name, tutor_phoneno, tutor_email, tutor_password, qualification_id, district_id, tutor_gender, tutor_status, date_of_registration) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)';
            connection.query(insertQuery, [tutor_name, tutor_phoneno, tutor_email, tutor_password, qualification_id, district_id, tutor_gender, tutor_status, date_of_registration], (err, result) => {
                if (err) {
                    console.error('Error executing insert query:', err);
                    return res.status(500).send({ message: 'Failed to register tutor' });
                }
                res.send({ message: 'Success' });
            });
        } else {
            res.send({ message: 'Failed: Tutor already exists' });
        }
    });
});

module.exports = router;
