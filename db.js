const mongoose = require('mongoose');//import the mongoose driver to connect the Node.js and MongoDB
//const MongoURL = 'mongodb://localhost:27017/myseconddatabase';//import the local MongoDB URL
const MongoURL = 'mongodb://hellopritamdey:hellopritam12345dey@ac-ipa5bsb-shard-00-00.e2m0r1t.mongodb.net:27017,ac-ipa5bsb-shard-00-01.e2m0r1t.mongodb.net:27017,ac-ipa5bsb-shard-00-02.e2m0r1t.mongodb.net:27017/myseconddatabase?ssl=true&replicaSet=atlas-nfovpl-shard-0&authSource=admin&appName=Cluster0'
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




