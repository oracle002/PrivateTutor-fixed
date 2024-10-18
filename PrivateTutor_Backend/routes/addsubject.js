var express = require('express');
var router = express.Router();
var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "privatetutor"
});



router.post('/', (req, res, next) => {
    let subject_id = req.body.subject_id;
    let tutor_id = req.body.tutor_id;
    let date_of_addition = req.body.date_of_addition;
   
    let query = `SELECT * FROM tbl_tutorsubjectspecification where tutor_id='${tutor_id}' and subject_id='${subject_id}'`;
    con.query(query, (err, rows) => {
        if (err) throw err;
        if (rows == "") {
            let strquery = 'INSERT INTO tbl_tutorsubjectspecification (tutor_id, subject_id,date_of_addition) VALUES (?,?,?)'; res.send({ message: 'Success' })
            con.query(strquery, [tutor_id, subject_id,date_of_addition])
        }
        else {
            res.send({ message: 'Failed' })
        }
    });
});
module.exports = router;