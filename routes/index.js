var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/speed', function(req, res, next) {
  res.render('speed');
});

router.get('/length', function(req, res, next) {
  res.render('length');
});

router.get('/mass', function(req, res, next) {
  res.render('mass');
});

router.get('/temp', function(req, res, next) {
  res.render('temp');
});

router.get('/time', function(req, res, next) {
  res.render('time');
});

module.exports = router;
