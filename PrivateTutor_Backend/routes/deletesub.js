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
    let subject_specificationid = req.body.subject_specificationid;
    let strquery = `DELETE FROM tbl_tutorsubjectspecification where subject_specificationid='${subject_specificationid}'`;
    con.query(strquery, (err, rows) => {
    if (err) throw err;
    res.send({ message: 'Success' })
    });
    });
    module.exports = router;