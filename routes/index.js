var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  if(req.param('kalimat') == undefined){
    var kata = "";
  }else{
    var kata = req.param('kalimat').toLowerCase()
  }
  res.render('index', { title: kata });
});

module.exports = router;
