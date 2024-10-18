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

    let query = 'SELECT * FROM tbl_tutorqualification';

    con.query(query, (err, rows) => {

        if (err) throw err;
        res.send(rows);
        console.log(rows);
    });
});

module.exports = router;