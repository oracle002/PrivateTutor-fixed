var express = require('express');
var router = express.Router();
var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "privatetutor"
});

/* Tutor Registration*/

router.post('/', (req, res, next) => {
    
    let subject_id = req.body.subject_id;
    let tutor_id = req.body.tutor_id;
    let candidate_id = req.body.candidate_id;
    let request_date = req.body.request_date;
    let request_status= 'Requested';
    
    let query = `SELECT * FROM tbl_candidaterequest where subject_id='${subject_id}' and tutor_id='${tutor_id}'`;
    con.query(query, (err, rows) => {
        if (err) throw err;
        if (rows == "") {
            let strquery = 'INSERT INTO tbl_candidaterequest (candidate_id, subject_id,tutor_id,request_date,request_status) VALUES (?,?,?,?,?)'; res.send({ message: 'Success' })
            con.query(strquery, [candidate_id, subject_id,tutor_id, request_date, request_status ])
        }
        else {
            res.send({ message: 'Failed' })
        }
    });
});
module.exports = router;