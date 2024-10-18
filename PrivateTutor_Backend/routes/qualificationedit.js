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
    let qualification_id = req.body.qualification_id;
    let qualification_title = req.body.qualification_title;
    let qualification_description = req.body.qualification_description;
    let strquery = `UPDATE tbl_tutorqualification SET qualification_title='${qualification_title}',
    qualification_description='${qualification_description}' where qualification_id='${qualification_id}'`;
    con.query(strquery, (err, rows) => {
    if (err) throw err;
    res.send({message:'Success'})
    });
    });
    
module.exports = router;


