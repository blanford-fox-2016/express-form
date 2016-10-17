var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var coba =  req.param('test')
  res.send('coba test', {coba});
});

module.exports = router;
