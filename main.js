var router = require('express').Router()
 
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://10.13.66.88:27017/automationframework";
router.get('/', function(req, res, next) {
  res.render('main/auth')
})

module.exports = router



