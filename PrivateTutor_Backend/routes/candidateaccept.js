var express = require('express');
var router = express.Router();
var mysql = require('mysql2');
    var con=mysql.createConnection({
        host:"localhost",
        user:"root",
        password:"",
        database:"privatetutor"
});
router.post('/', (req, res, next) => {

    let candidaterequest_id = req.body.candidaterequest_id;
    let request_status = "Accepted";
    let strquery = `UPDATE tbl_candidaterequest SET request_status='${request_status}' where candidaterequest_id='${candidaterequest_id}'`;
    con.query(strquery, (err, rows) => {
    if (err) throw err;
    res.send({ message: 'Success' })
    });
    });
    module.exports = router;