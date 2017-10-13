var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
  var msg = 'In Chefs page';
  if(req.query.sort_by != null) {
    msg += ' --sorted by: ' +req.query.sorted_by;
  }
  res.send(msg);
});

router.get('/:title', (req,res) => {
  res.send('Chef Title: ' +req.params.title);
});

module.exports = router;
