var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  var say = req.param('test');
  res.send(say);
});

module.exports = router;
