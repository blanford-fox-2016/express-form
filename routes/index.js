var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // release 1
  // var temp = req.query.say
  // res.send(temp);
  firstname = req.query.firstname
  lastname = req.query.lastname

  res.render('index', {
    firstname:firstname,
    lastname:lastname
  });

});

module.exports = router;
