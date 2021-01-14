var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

const checktime = function(req, res, next){
  var date = new Date()
  var hour = date.getHours()
  if ( hour <= 18 && hour >= 8){
    console.log("A new request received at " + date.getHours());
  }
  else{
    res.render('Offline')

}
next()
}
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine','pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(checktime);

app.use('/', indexRouter);

app.use('/OurServices', indexRouter);
app.use('/ContactUs', indexRouter);
app.use('/users', usersRouter);





module.exports = app;
