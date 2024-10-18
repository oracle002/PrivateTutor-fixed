var express = require('express');
var router = express.Router();
var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "privatetutor"
});

router.get('/', (req, res, next) => {

    let query = 'SELECT * FROM tbl_candidaterequest t inner join tbl_candidateregistration c on t.candidate_id=c.candidate_id inner join tbl_subjectspecific s on t.subject_id=s.subject_id order by t.request_date';

    con.query(query, (err, rows) => {

        if (err) throw err;
        res.send(rows);
        console.log(rows);
    });
});

module.exports = router;