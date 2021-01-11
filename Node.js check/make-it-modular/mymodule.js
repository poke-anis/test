const fs = require('fs')
var path = require('path')
var files= []
module.exports = function(dir,ext,callback){
    fs.readdir(dir,(err, list) =>{
    if (err) return callback(err);
    list.forEach(element => {
        if(path.extname(element) == '.'+ext){
            files.push(element)
        }  
})
return callback(null,files)
})
}