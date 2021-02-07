const AuthService = require('../Controllers/SongControllers')

function init(router) {
    router.route('/save').post(save)
    router.route('/read').get(read)
}


module.exports.init= init