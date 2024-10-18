const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root', // XAMPP default username
  password: '', // XAMPP default has no password
  database: 'privatetutor' // Name of the database you created in phpMyAdmin
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err.stack);
    return;
  }
  console.log('Connected to the database');
});

module.exports = connection;



var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var cors = require('cors');

var app = express();

var AdminLoginRouter = require('./routes/AdminLogin');
var SubjectregRouter = require('./routes/subjectreg');
var QualificationregRouter = require('./routes/qualificationreg');
var DistrictsRouter = require('./routes/districts');
var SubjectsRouter = require('./routes/subjects');
var QualificationsRouter = require('./routes/qualifications');
var SubjecteditRouter = require('./routes/subjectedit');
var GetsubjectRouter = require('./routes/getsubject');
var GetqualificationRouter = require('./routes/getqualification');
var QualificationeditRouter = require('./routes/qualificationedit');
var TutorregRouter = require('./routes/tutorreg.js');
var CandidateregRouter = require('./routes/candidatereg');
var SubjectdeleteRouter = require('./routes/subjectdelete');
var QualificationdeleteRouter = require('./routes/qualificationdelete');
var TutorrequestviewRouter = require('./routes/tutorrequestview');
var TutoracceptRouter = require('./routes/tutoraccept');
var TutorrejectRouter = require('./routes/tutorreject');
var TutorloginRouter = require('./routes/tutorlogin');
var CandidateloginRouter = require('./routes/candidatelogin');
var AddsubjectRouter = require('./routes/addsubject');
var ViewaddRouter = require('./routes/viewadd');
var DeletesubRouter = require('./routes/deletesub');
var AddmaterialRouter = require('./routes/addmaterial');
var UploadRouter = require('./routes/upload');
var TutorsubjectRouter = require('./routes/tutorsubject');
var MaterialviewRouter = require('./routes/materialview');
var DeletematerialRouter = require('./routes/deletematerial');
var ProfileviewRouter = require('./routes/profileview');
var ProfileupdateRouter = require('./routes/profileupdate');
var TutorviewRouter = require('./routes/tutorview');
var GettutorRouter = require('./routes/gettutor');
var GettutorsubjectRouter = require('./routes/gettutorsubject');
var SendrequestRouter = require('./routes/sendrequest');
var ViewrequestRouter = require('./routes/viewrequest');
var CdtviewrequestsRouter = require('./routes/cdtviewrequests');
var CandidateacceptRouter = require('./routes/candidateaccept');
var CandidaterejectRouter = require('./routes/candidatereject');
var CdtmaterialviewRouter = require('./routes/cdtmaterialview');
var CandidateviewRouter = require('./routes/candidateview');
var CandidaterequestviewRouter = require('./routes/candidaterequestview');
var SubjectwisetutorRouter = require('./routes/subjectwisetutor');









app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
global.__basedir = path.resolve(path.dirname(''));

app.use(cors());

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.use('/adminlogin',AdminLoginRouter);
app.use('/subjectreg',SubjectregRouter);
app.use('/qualificationreg',QualificationregRouter);
app.use('/districts',DistrictsRouter);
app.use('/subjects',SubjectsRouter);
app.use('/qualifications',QualificationsRouter);
app.use('/subjectedit',SubjecteditRouter);
app.use('/getsubject',GetsubjectRouter);
app.use('/getqualification',GetqualificationRouter);
app.use('/qualificationedit',QualificationeditRouter);
app.use('/tutorreg',TutorregRouter);
app.use('/candidatereg',CandidateregRouter);
app.use('/subjectdelete',SubjectdeleteRouter);
app.use('/qualificationdelete',QualificationdeleteRouter);
app.use('/tutorrequestview',TutorrequestviewRouter);
app.use('/tutoraccept',TutoracceptRouter);
app.use('/tutorreject',TutorrejectRouter);
app.use('/tutorlogin',TutorloginRouter);
app.use('/candidatelogin',CandidateloginRouter);
app.use('/addsubject',AddsubjectRouter);
app.use('/viewadd',ViewaddRouter);
app.use('/deletesub',DeletesubRouter);
app.use('/addmaterial',AddmaterialRouter);
app.use('/upload',UploadRouter);
app.use('/tutorsubject',TutorsubjectRouter);
app.use('/materialview',MaterialviewRouter);
app.use('/deletematerial',DeletematerialRouter);
app.use('/profileview',ProfileviewRouter);
app.use('/profileupdate',ProfileupdateRouter);
app.use('/tutorview',TutorviewRouter);
app.use('/gettutor',GettutorRouter);
app.use('/gettutorsubject',GettutorsubjectRouter);
app.use('/sendrequest',SendrequestRouter);
app.use('/viewrequest',ViewrequestRouter);
app.use('/cdtviewrequests',CdtviewrequestsRouter);
app.use('/candidateaccept',CandidateacceptRouter);
app.use('/candidatereject',CandidaterejectRouter);
app.use('/cdtmaterialview',CdtmaterialviewRouter);
app.use('/candidateview',CandidateviewRouter);
app.use('/candidaterequestview',CandidaterequestviewRouter);
app.use('/subjectwisetutor',SubjectwisetutorRouter);








module.exports = app;
