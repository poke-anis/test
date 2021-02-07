let mongoose = require('mongoose');

let userSchema  = new mongoose.Schema({
    name : {type:String,required:true},
    email : String,
    username : String,
    password: String,
    pic : String
  })


module.exports = mongoose.model('User',userSchema)