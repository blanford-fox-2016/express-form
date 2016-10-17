var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  if(req.param('userForm') == undefined){
    userForm = "";
  }else if(req.param('pwdForm') == undefined){
    pwdForm = "";
  }else if(req.param('sayForm') == undefined){
    sayForm ="";
  }else{
    var userForm = req.param('userForm').toLowerCase();
    var pwdForm = req.param('pwdForm').toLowerCase();
    var sayForm = req.param('sayForm').toLowerCase();
  }
  res.render('user_from', {userForm,pwdForm,sayForm});
});
module.exports = router;
