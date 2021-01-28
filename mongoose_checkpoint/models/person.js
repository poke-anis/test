let mongoose = require('mongoose');

let personSchema  = new mongoose.Schema({
    name : {type:String,required:true},
    age : Number,
    favoriteFoods : Array
  })


module.exports = mongoose.model('Person',personSchema)