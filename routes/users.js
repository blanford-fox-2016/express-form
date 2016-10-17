var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/:user?/:pwd?', function(req, res, next) {
    var datasay = req.param('say')
    var login ={
      username : req.params.user,
      password : req.params.pwd
    }
      res.render('users', { login, datasay});

});


module.exports = router;
