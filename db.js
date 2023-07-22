const mongoose = require("mongoose");

var mongoURL = 'mongodb+srv://jaindipesh534:Dip142001@cluster0.qxhuvxk.mongodb.net/Mern-rooms'

mongoose.connect(mongoURL , {useUnifiedTopology: true , useNewUrlParser : true})

var connection = mongoose.connection

connection.on('error' ,()=>{
    console.log('MongoDb connection failed')
})

connection.on('connected' ,()=>{
    console.log('MongoDb connection succesfull')
})

module.exports = mongoose