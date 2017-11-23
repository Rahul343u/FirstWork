var http = require('http');
var fs = require('fs');

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://10.13.66.88:27017/automationframework";
http.createServer(function (req, res) {
fs.readFile('only.html', function(err, data)
{

});
MongoClient.connect(url, function(err, db) {
if (err) throw err;
var query = { name:"WLS_CS_TC20" };
db.collection("testcases").find(query).toArray(function(err, result) {
if (err) throw err;
res.write(result);
db.close();
});
});
}).listen(8080);