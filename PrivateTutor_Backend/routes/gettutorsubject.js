var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "privatetutor" });


router.post('/', (req, res, next) => {
    let tutor_id = req.body.id;
    let query = `SELECT * FROM tbl_tutorregistration t 
    inner join tbl_tutorsubjectspecification n on t.tutor_id=n.tutor_id 
    inner join tbl_subjectspecific s on n.subject_id=s.subject_id where t.tutor_id='${tutor_id}'`;
    con.query(query, (err, rows) => {
    if (err) throw err;
    res.send(rows);
    });
    });
    

module.exports = router;
