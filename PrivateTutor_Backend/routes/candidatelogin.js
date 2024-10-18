var express = require('express');
var router = express. Router();
var mysql = require('mysql2');

var con = mysql.createConnection({
host: "localhost",
user: "root",
password:"",
database: "privatetutor"
});

/* Candidate Login*/

router.post('/', (req, res, next) =>{
let candidate_email= req.body.username;
let candidate_password= req.body.password;
let query = `SELECT * FROM tbl_candidateregistration WHERE 	candidate_email='${candidate_email}' AND candidate_password='${candidate_password}'`;
con.query(query, (err, rows) => {
if (err) throw err;
res.send(rows);
});
});
module.exports = router;