var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var comment = req.param('say')
  res.render('index', { title: comment });
});

module.exports = router;
