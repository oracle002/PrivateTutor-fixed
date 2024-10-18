var express = require('express');
var router = express.Router();
var mysql = require('mysql2');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "privatetutor"
});

/* Tutor Registration*/

router.post('/', (req, res, next) => {
    let material_title = req.body.material_title;
    let subject_id = req.body.subject_id;
    let tutor_id = req.body.tutor_id;
    let material_referencelink = req.body.material_referencelink;
    let material_description = req.body.material_description;
    let material_thumbnail = req.body.material_thumbnail;
    let material_postdate = req.body.material_postdate;
    
    let query = `SELECT * FROM tbl_materials where material_title='${material_title}'`;
    con.query(query, (err, rows) => {
        if (err) throw err;
        if (rows == "") {
            let strquery = 'INSERT INTO tbl_materials (material_title, subject_id,tutor_id,material_referencelink,material_description,material_thumbnail,material_postdate) VALUES (?,?,?,?,?,?,?)'; res.send({ message: 'Success' })
            con.query(strquery, [material_title, subject_id,tutor_id, material_referencelink, material_description, material_thumbnail, material_postdate])
        }
        else {
            res.send({ message: 'Failed' })
        }
    });
});
module.exports = router;