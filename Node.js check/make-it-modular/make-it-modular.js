var ext = process.argv[3]
var dir =  process.argv[2]
const mymodule = require('./mymodule')

mymodule(dir,ext,(err,list)=>{
    if (err) throw err;
    list.forEach(element => {
        console.log(element)
    });

})
