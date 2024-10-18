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
    let tutor_id = req.body.id;
    let query = `SELECT * FROM tbl_candidaterequest c inner join tbl_tutorregistration t on c.tutor_id=t.tutor_id inner join tbl_subjectspecific s on c.subject_id=s.subject_id inner join tbl_candidateregistration q on c.candidate_id=q.candidate_id WHERE t.tutor_id='${tutor_id}'`;

    con.query(query, (err, rows) => {

        if (err) throw err;
        res.send(rows);
        console.log(rows);
    });
});

module.exports = router;