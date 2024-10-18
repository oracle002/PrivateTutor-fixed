var express = require('express');
const router = express.Router();
const mysql = require('mysql2');

// Create a MySQL connection
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root', // XAMPP default username
    password: '', // XAMPP default has no password
    database: 'privatetutor' // Name of the database you created in phpMyAdmin
});

/* Candidate Registration */
router.post('/', (req, res) => {
    // Extracting candidate data from request body
    let { candidate_name, candidate_phoneno, candidate_email, candidate_password, candidate_age, district_id, candidate_gender, date_of_registration } = req.body;

    // Check for required fields (basic validation)
    if (!candidate_name || !candidate_phoneno || !candidate_email || !candidate_password) {
        return res.status(400).send({ message: 'Please provide all required fields' });
    }

    // Check if candidate already exists
    let query = `SELECT * FROM tbl_candidateregistration WHERE candidate_email = ?`; // Check by email, it's more unique
    connection.query(query, [candidate_email], (err, rows) => {
        if (err) {
            console.error('Database query error:', err);
            return res.status(500).send({ message: 'Internal server error' });
        }

        if (rows.length === 0) {
            // Insert new candidate record
            let strquery = 'INSERT INTO tbl_candidateregistration (candidate_name, candidate_phoneno, candidate_email, candidate_password, candidate_age, district_id, candidate_gender, date_of_registration) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
            connection.query(strquery, [candidate_name, candidate_phoneno, candidate_email, candidate_password, candidate_age, district_id, candidate_gender, date_of_registration], (insertErr, insertRes) => {
                if (insertErr) {
                    console.error('Insert error:', insertErr);
                    return res.status(500).send({ message: 'Internal server error' });
                }
                res.status(201).send({ message: 'Candidate registered successfully' }); // 201 Created
            });
        } else {
            res.status(409).send({ message: 'Candidate already exists' }); // Conflict status
        }
    });
});

module.exports = router;
