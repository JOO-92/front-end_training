const mongoose = require('mongoose')
module.exports = () => {
    function connect(){
        mongoose.connect('mongodb://localhost:27017/sunday', function(err){
            if(err){
                console.log("connection error!")
            }
            console.log("connected!")
        })
    } 
    connect();
    mongoose.connection.on('disconnected', connect)
    require('./zoo.js')
}