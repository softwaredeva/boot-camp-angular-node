var debug = require('debug')('ecommerceapi:products-router');
var express = require('express');
var router = express.Router();
var path = require('path');
var fs = require('fs');

var productsDB = path.join(__dirname, '..','db','products.json');

/* GET all products. */
router.get('/', (req, res, next)=>{
  let query = req.query;
  fs.readFile(productsDB, (err, db)=>{
    if (err){
      debug(err);
      return next(err);
    }
    let products;
    try {
      products = JSON.parse(db);
    } catch (err) {
      return next(err);
    }
    if(query.name || query.description){
      let nameRegex;
      let descriptionRegex;
      if(query.name)
      nameRegex = new RegExp(query.name,"i");
      if(query.description)
      descriptionRegex = new RegExp(query.description,"i");
      products = products.filter(prod=>{
        let result = false;
        if(nameRegex)
        result = nameRegex.test(prod.name)?true:result;
        if(descriptionRegex)
        result = descriptionRegex.test(prod.description)?true:result;
        return result;
      });
    }
    res.json({success: true, items: products});
  });
});

/* GET product by id. */
router.get('/:id', (req, res, next)=>{
  let productId = req.params.id;
  fs.readFile(productsDB, (err, db)=>{
    if (err){
      debug(err);
      return next(err);
    }
    let products;
    try {
      products = JSON.parse(db);
    } catch (err) {
      return next(err);
    }
    let product  = products.find(prod=>prod.id ==productId);
    if(!product)
    return res.json({success: false, item: null});
    res.json({success: true, item: product});
  });
});

module.exports = router;
