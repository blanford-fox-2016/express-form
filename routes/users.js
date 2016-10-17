var express = require('express');
var router = express.Router();

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource hallo');
// });

router.get('/', function(req, res, next) {
  if(req.param('kalimat') == undefined){
    kalimat = "";
  }else{
    var kalimat = req.param('kalimat').toLowerCase();
  }
  res.render('view_user', { kalimat});
});

module.exports = router;
