var express = require('express')
var ejs = require('ejs')
var mongoose = require('mongoose')
var bodyParser = require('body-parser')

var app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))

app.set('view engine', 'ejs')

app.listen(8080, function() {
    console.log('Node.js listening on port ' + 8080)
})

var mainRoutes = require('./routes/main')
app.use(mainRoutes)
var authentication = require('./routes/auth');
app.use('/',authentication);