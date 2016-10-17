var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.render('user', {});
});

router.post('/', (req, res) => {
  if (req.param('sentence') === undefined) {
    sentence = '';
  } else {
    sentence = req.param('sentence').toLowerCase();
  }
  res.render('user', {
    result: sentence
  });
})


module.exports = router;
