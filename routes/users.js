var express = require('express');
var router = express.Router();

/* GET users listing. */
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

router.post('/',(req, res, next) => {
  var firstname = req.param('firstname')
  var lastname = req.param('lastname')

  if(firstname != '' && lastname != '') {
    firstname = firstname.toLowerCase()
    lastname = lastname.toLowerCase()
  }
  
  res.redirect(`/users?firstname=${firstname}&lastname=${lastname}`)
})

module.exports = router;
