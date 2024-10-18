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
    let material_id = req.body.material_id;
    let strquery = `DELETE FROM tbl_materials where material_id='${material_id}'`;
    con.query(strquery, (err, rows) => {
    if (err) throw err;
    res.send({ message: 'Success' })
    });
    });
    module.exports = router;