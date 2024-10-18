var express = require('express');
var router = express.Router();
var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "privatetutor"
});

/* Subject Registration*/

router.post('/', (req, res, next) => {
    let subject = req.body.subject;
    let description = req.body. description;
    let query = `SELECT * FROM tbl_subjectspecific where subject_title='${subject}'`;
    con.query(query, (err, rows) => {
        if (err) throw err;
        if (rows == "") {
            let strquery = 'INSERT INTO tbl_subjectspecific (subject_title, subject_description) VALUES (?,?)'; res.send({ message: 'Success' })
            con.query(strquery, [subject,description])
        }
        else {
            res.send({ message: 'Failed' })
        }
    });
});
module.exports = router;