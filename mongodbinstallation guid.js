important steps for mongodb

C:\>md data
C:\md data\db

If you have to install the MongoDB at a different location, then you need to specify an 
alternate path for \data\db by setting the path dbpath in mongod.exe. For the same, issue the following commands.

D:\set up\mongodb\bin>mongod.exe --dbpath "d:\set up\mongodb\data" 
D:\set up\mongodb\bin>mongo.exe

http://technoon.github.io/lessons/mongodb-nodejs

http://www.transistor.io/getting-started-with-node-express-and-mongodb.html

https://evdokimovm.github.io/javascript/nodejs/mongodb/pagination/expressjs/ejs/bootstrap/2017/08/20/create-pagination-with-nodejs-mongodb-express-and-ejs-step-by-step-from-scratch.html

https://scotch.io/tutorials/setting-up-a-mean-stack-single-page-application
https://www.youtube.com/redirect?q=https%3A%2F%2Fgithub.com%2Fbradtraversy%2Fmean_mytasklist&redir_token=ippCIoE5wg4WUwe68UTQFXXiU558MTUxMjAxODE1NkAxNTExOTMxNzU2&v=PFP0oXNNveg&event=video_description

https://github.com/bradtraversy/mean_mytasklist.git


https://appdividend.com/2017/06/18/node-js-express-tutorial/

dev extream

https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/Overview/jQuery/Light/


https://docs.mongodb.com/manual/reference/operator/aggregation/concat/#exp._S_concat


itemRouter.route('/post').post(function (req, res) 
{
	  MongoClient.connect(url, function(err, db) 
	  {
		  if (err) throw err;
		   db.collection("testcases").find({},{}).limit(15).toArray(function(err, itms)
					{
						if(err){
						  console.log(err);
						}
						else 
							 
							 {
								 res.render('item', {itms: itms});
							 }
						 // console.log(itms);
					 });
				
		  });
     		  
	  });


--==========================================================================================================================

var MongoClient = require('mongodb').MongoClient;
var mongojs = require('mongojs');
//var url = "mongodb://localhost:27017/mydb";
var url = "mongodb://10.13.66.88:27017/automationframework";
var y;
var ObjectId = require('mongodb').ObjectID;


MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  db.collection("testcases").findOne({}, function(err, result) {
    if (err) throw err;
 var r ="'" + result.collection[0].actionid + "'";
    console.log(r);
	y = r;
    db.close();
  });
});


MongoClient.connect(url, function(err, db)
{
if (err) throw err;
db.collection("actions").find({"_id": new ObjectId($y)}).toArray(function(err, itms)
{
if(err){
console.log(err);
}
else
	console.log(y);
console.log(itms);
db.close();
});

});



MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  db.collection("testcases").findOne({}, function(err, result) {
    if (err) throw err;
 var r =result.collection[0].actionid;
    console.log(r);
	db.collection("actions").find({"_id": new ObjectId(r)}).toArray(function(err, itms)
{
if(err){
console.log(err);
}
else
	console.log(r);
console.log(itms);
});
console.log(r);
    db.close();
  });
});
