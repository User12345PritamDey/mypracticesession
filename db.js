const mongoose = require('mongoose');//import the mongoose driver to connect the Node.js and MongoDB
//const MongoURL = 'mongodb://localhost:27017/myseconddatabase';//import the local MongoDB URL
require('dotenv').config();
const MongoURL = process.env.ONLINE_URL;
mongoose.connect(MongoURL);//connect the URL with mongodb
const db = mongoose.connection;
db.on('connected',()=>{
    console.log("Your database is connected");
    console.log("Your Database name:",mongoose.connection.name);
})
db.on('disconnected',()=>{
    console.log("Your database is disconnected");
})
db.on('error',(err)=>{
    console.log("Error in database",err);
})
module.exports=db;




