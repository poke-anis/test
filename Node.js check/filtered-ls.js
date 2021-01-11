const fs = require('fs')
var path = require('path')
var ext = '.'+process.argv[3]
var xx = fs.readdir(process.argv[2],(err, list) =>{
    list.forEach(element => {
        if(path.extname(element) == ext){
            console.log(element)
        }
});
})
