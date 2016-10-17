var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  // res.send(req.query.username + ' ' + req.query.password)
  res.render('users', {title: 'Express Form'})
});

router.post('/', function(req, res, next) {
  let user = req.body.username.toLowerCase()
  let pwd = req.body.password.toLowerCase()
  if (user && pwd) {
    res.render('users', {title: 'Express form', usr: user, pass: pwd})
  }else{
    res.redirect('/users')
  }
})

module.exports = router;
