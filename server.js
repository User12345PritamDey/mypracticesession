const express = require('express');
const app = express();
const db = require('./db.js');
require('dotenv').config();
const PORT = process.env.PORT||3000;
const BodyParser = require('body-parser');
app.use(BodyParser.json());
const student = require('./routes/student_router.js');
app.use('/student',student);
app.listen(PORT,()=>{
    console.log("This is your port");
})


