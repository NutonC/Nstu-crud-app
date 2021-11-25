const express = require('express');

const adminRouter = express.Router();

const { 
    httpPostAddStudent,
    httpPostAddTeacher,
    httpGetAllStudent,
    httpPutUpdateStudent,
    httpDeleteStudent,
    httpDeleteTeacher,
    httpPutUpdateTeacher,
    httpGetAllTeacher
 } = require('./admin.controller');

adminRouter.get('/get-students', httpGetAllStudent);
adminRouter.get('/get-teachers', httpGetAllTeacher);
adminRouter.post('/add-student', httpPostAddStudent);
adminRouter.post('/add-teacher', httpPostAddTeacher);
adminRouter.put('/update-student', httpPutUpdateStudent);
adminRouter.put('/update-teacher', httpPutUpdateTeacher);
adminRouter.delete('/delete-student', httpDeleteStudent);
adminRouter.delete('/delete-teacher', httpDeleteTeacher);


module.exports = adminRouter;