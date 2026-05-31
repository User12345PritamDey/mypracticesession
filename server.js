const express = require('express');
const app = express();
const db = require('./db.js');
const BodyParser = require('body-parser');
app.use(BodyParser.json());
const student = require('./routes/student_router.js');
app.use('/student',student);
app.listen(7000,()=>{
    console.log("This is your port");
})

