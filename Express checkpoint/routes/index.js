var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});
router.get('/ContactUs', function(req, res, next) {
  res.render('ContactUs', { title: 'ContactUs' });
});
router.get('/OurServices', function(req, res, next) {
  res.render('OurServices', { title: 'OurServices' });
});

module.exports = router;
