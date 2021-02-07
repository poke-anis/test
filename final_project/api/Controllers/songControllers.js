const SongModel = require('../models/SongModel')
const UsongModel = require('../models/UsongModel')

function save(req,res){
    SongModel.create({name:req.body.name ,notes:req.body.notes})
    .then(song=> res.status(200).json(song))
    UsongModel.create({})
}

function read(req,res){
    SongModel.findById(req.body.id)
    .then(user=> res.status(200).json(user))

}


const songController ={
    save: save,
    read: read,
}

module.exports = songController