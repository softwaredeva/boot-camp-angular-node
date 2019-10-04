var express = require('express');
var router = express.Router();
var path = require('path');
var fs = require('fs');

var checkoutsDB = path.join(__dirname, '..','db','checkouts.json');

/* GET users listing. */
router.post('/', function(req, res, next) {
  let body = req.body;

  fs.readFile(checkoutsDB, (err, db)=>{
    if (err){
      debug(err);
      return next(err);
    }
    let checkouts;
    try {
      checkouts = JSON.parse(db);
    } catch (err) {
      debug("err",err);
      return next(err);
    }
    checkouts.push(body);
    let data = JSON.stringify(checkouts, null, 2);
    fs.writeFile(checkoutsDB, data, (err)=>{
      if(err)
      return next(err);
      res.json({success: true, items: products});
    });
  });

});

module.exports = router;
