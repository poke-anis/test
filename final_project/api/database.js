var express = require('express');
var app = express();
const songRoute = require('./Routes/SongRoutes')
const authRoute = require('./Routes/AuthRoutes')
const session = require('express-session')
const router = express.Router()

var server = app.listen(3000, "127.0.0.1", function () {
    var host = server.address().address
    var port = server.address().port
    console.log("Example app listening at http://%s:%s", host, port)
});
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', router)
authRoute.init(router)
songRoute.init(router)

module.exports = new Database()