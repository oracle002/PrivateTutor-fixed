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
    let tutor_id = req.body.tutor_id
    let query = `SELECT * FROM tbl_tutorsubjectspecification t inner join tbl_subjectspecific s on t.subject_id=s.subject_id where t.tutor_id='${tutor_id}'`;

    con.query(query, (err, rows) => {

        if (err) throw err;
        res.send(rows);
        console.log(rows);
    });
});

module.exports = router;