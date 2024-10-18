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


    let tutor_id = req.body.id;
    let query = `SELECT * FROM tbl_tutorregistration t 
    inner join tbl_tutorqualification q on t.qualification_id=q.qualification_id 
    inner join tbl_district d on t.district_id=d.district_id where tutor_id='${tutor_id}'`;

    con.query(query, (err, rows) => {

        // if (err) throw err;
        res.send(rows);
        console.log(rows);
    });
});


module.exports = router;