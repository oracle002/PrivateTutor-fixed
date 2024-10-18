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
    let query = `SELECT * FROM tbl_materials m inner join tbl_candidaterequest c on m.tutor_id=c.tutor_id inner join tbl_subjectspecific s on c.subject_id=s.subject_id
    where m.tutor_id='${tutor_id}' and m.subject_id='${subject_id}' and c.request_status='Accepted'`;
console.log(query);
    con.query(query, (err, rows) => {

        // if (err) throw err;
        res.send(rows);
        console.log(rows);
    });
});

module.exports = router;