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

    let tutor_id = req.body.tutor_id;
    let tutor_status = "Rejected";
    let strquery = `UPDATE tbl_tutorregistration SET tutor_status='${tutor_status}' where tutor_id='${tutor_id}'`;
    con.query(strquery, (err, rows) => {
    if (err) throw err;
    res.send({ message: 'Success' })
    });
    });
    module.exports = router;