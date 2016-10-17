var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  // var query = req.query.say
  // res.send(query);
  res.render('users')
});

router.post('/',function(req,res,next)
{
  var username = req.body.username.toLowerCase()
  var password = req.body.password.toLowerCase()
  res.render('users',{username:username,password:password})
})

module.exports = router;
