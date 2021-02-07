let mongoose = require('mongoose');

let usongSchema  = new mongoose.Schema({
    user : Number,
    song : Array,

  })


module.exports = mongoose.model('Songs',usongSchema)