const AuthModel = require('../models/UserModel')

function register(req,res) {
    AuthModel.create({ name:req.body.name})
    .then(user=> res.status(200).json(user))
    
}

function login(req,res) {
    res.json(req.user)
    
}
const authController ={
    register: register,
    login:login,
}

module.exports = authController