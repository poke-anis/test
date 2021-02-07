const AuthService = require('../Controllers/AuthControllers')

function init(router) {
    router.route('/register').post(register)
    router.route('/login').post(login)
}


module.exports.init= init