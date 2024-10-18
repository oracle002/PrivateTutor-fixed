var express = require('express');
var router = express.Router();
var mysql = require('mysql');
    var con=mysql.createConnection({
        host:"localhost",
        user:"root",
        password:"",
        database:"privatetutor"
});
router.post('/', (req, res, next) => {
    let qualification_id = req.body.qualification_id;
    let strquery = `DELETE FROM tbl_tutorqualification where qualification_id='${qualification_id}'`;
    con.query(strquery, (err, rows) => {
    if (err) throw err;
    res.send({ message: 'Success' })
    });
    });
    module.exports = router;