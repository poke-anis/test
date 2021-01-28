var express = require('express');
var app = express();
let mongoose = require('mongoose');
const serve = '127.0.0.1:27017'; // REPLACE WITH YOUR DB SERVER
const database = 'test';      // REPLACE WITH YOUR DB NAME

class Database {
  constructor() {
    this._connect()
  }
_connect() {
     mongoose.connect(`mongodb://${serve}/${database}`, { useNewUrlParser: true, useUnifiedTopology: true })
       .then(() => {
         console.log('Database connection successful')
       })
       .catch(err => {
         console.error('Database connection error')
       })
  }
}


var server = app.listen(3000, "127.0.0.1", function () {
    var host = server.address().address
    var port = server.address().port
    console.log("Example app listening at http://%s:%s", host, port)
});
let personModel = require('./models/person')
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.post('/create',(req,res,next)=>{
    personModel.create({ name: req.body.name, age: req.body.age, favoriteFoods: [req.body.foods] })
    .then( person => res.status(200).json(person))
})
app.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
app.get('/find',(req,res,next)=>{
    personModel.find()
        .then( person => res.status(200).json(person))
})
app.post('/findone',(req,res,next)=>{
    personModel.findOne({favoriteFoods: req.body.food})
    .then( person => res.status(200).json(person))
})

app.post('/findid',(req,res,next)=>{
    personModel.findById(req.body.id)
    .then( person => res.status(200).json(person))
})
app.post('/update',(req,res,next)=>{
    var foodtoadd = "hamburger"
    personModel.findById(req.body.id, function(error, person) {
        personModel.favoriteFoods.push(foodtoadd);
        personModel.save()
    })
    .then( person => res.status(200).json(person))
})

app.post('/updatebyname',(req,res,next)=>{
    personModel.findOneAndUpdate({name:req.body.name}, 'age:20' ,{ new:true})
    .then( person => res.status(200).json(person))
})

app.post('/delete',(req,res,next)=>{
    personModel.findByIdAndRemove(req.body.id)
    .then( person => res.status(200).json(person))
})

app.delete('/deletemany',(req,res,next)=>{
    personModel.remove({name:req.body.name})
    .then( person => res.status(200).json(person))
    .catch(error => res.status(400).json({ error }));
})

app.post('/search',(req,res,next)=>{
    personModel.find({favoriteFoods:"burrito"}).sort({name:'asc'}).limit(2).select('-age').exec()
    .then( person => res.status(200).json(person))
    .catch(error => res.status(400).json({ error }));
})
module.exports = new Database()