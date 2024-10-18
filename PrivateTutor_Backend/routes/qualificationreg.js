var express = require('express');
var router = express.Router();
var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "privatetutor"
});

/* Qualification Registration*/

router.post('/', (req, res, next) => {
    let qualification = req.body.qualification;
    let qdescription = req.body. qdescription;
    let query = `SELECT * FROM tbl_tutorqualification where qualification_title='${qualification}'`;
    con.query(query, (err, rows) => {
        if (err) throw err;
        if (rows == "") {
            let strquery = 'INSERT INTO tbl_tutorqualification (qualification_title, qualification_description) VALUES (?,?)'; res.send({ message: 'Success' })
            con.query(strquery, [qualification,qdescription])
        }
        else {
            res.send({ message: 'Failed' })
        }
    });
});
module.exports = router;