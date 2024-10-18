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
    let subject_id = req.body.subject_id;
    let strquery = `DELETE FROM tbl_subjectspecific where subject_id='${subject_id}'`;
    con.query(strquery, (err, rows) => {
    if (err) throw err;
    res.send({ message: 'Success' })
    });
    });
    module.exports = router;