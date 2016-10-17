var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  // res.send(req.params);
  let say = req.param('say').toLowerCase();
  let name = req.param('name').toLowerCase();

  res.render('users', { say,
                        name
                      })
});

module.exports = router;
