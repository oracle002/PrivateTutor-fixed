var express = require('express');
var router = express. Router();
var mysql = require('mysql');

var con = mysql.createConnection({
host: "localhost",
user: "root",
password:"",
database: "privatetutor"
});

/* Admin Login*/

router.post('/', (req, res, next) =>{
let adminusername= req.body.username;
let adminpassword= req.body.password;
let query = `SELECT * FROM tbl_adminlogin WHERE adminusername='${adminusername}' AND adminpassword='${adminpassword}'`;
con.query(query, (err, rows) => {
if (err) throw err;
res.send(rows);
});
});
module.exports = router;