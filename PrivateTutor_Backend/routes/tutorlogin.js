var express = require('express');
var router = express. Router();
var mysql = require('mysql');

var con = mysql.createConnection({
host: "localhost",
user: "root",
password:"",
database: "privatetutor"
});

/* Tutor Login*/

router.post('/', (req, res, next) =>{
let tutor_email= req.body.username;
let tutor_password= req.body.password;
let query = `SELECT * FROM tbl_tutorregistration WHERE 	tutor_email='${tutor_email}' AND tutor_password='${tutor_password}'AND tutor_status='Accepted'`;
con.query(query, (err, rows) => {
if (err) throw err;
res.send(rows);
});
});
module.exports = router;