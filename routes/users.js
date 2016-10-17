var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  var say = req.param('string')
  if(say == undefined){
      say = ""
  }else{
     say = req.param('string').toLowerCase()
  }
  res.render('form', { say })
});

module.exports = router;
