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
    let candidate_id = req.body.id;
    let query = `SELECT * FROM tbl_candidaterequest c inner join tbl_tutorregistration t on c.tutor_id=t.tutor_id inner join tbl_subjectspecific s on c.subject_id=s.subject_id inner join tbl_tutorqualification q on t.qualification_id=q.qualification_id WHERE candidate_id='${candidate_id}'`;

    con.query(query, (err, rows) => {

        if (err) throw err;
        res.send(rows);
        console.log(rows);
    });
});

module.exports = router;