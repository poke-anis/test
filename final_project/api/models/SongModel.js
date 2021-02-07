let mongoose = require('mongoose');

let songSchema  = new mongoose.Schema({
    name : {type:String,required:true},
    notes : [[String]],
    likes : Number,

  })


module.exports = mongoose.model('Song',songSchema)