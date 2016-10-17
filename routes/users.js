var express = require('express');
var router = express.Router();

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource hallo');
// });

router.get('/:user?/:password?', function(req, res, next) {
  var name = req.param('say')
  var data = {
    username : req.params.user,
    password : req.params.password
  }
  res.render('view_user', { dataini: data, nama : name });
});

module.exports = router;
