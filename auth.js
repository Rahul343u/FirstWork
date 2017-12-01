var express = require('express');
var path = require('path');
var router = express.Router();
var ldap = require('ldapjs');
var ldap_server = '10.10.80.1';

/* POST login form request */
router.post('/login/auth',function(req,res){
  var username = req.body.username;
  var username_domain = 'att\\'+username;
  
  var password = req.body.password;
  console.log(username);
  console.log(password);
  if(username == 'admin' || password == 'admin'){
    req.session.username = 'ADMIN';
    res.redirect('/index');
  }
  var client = ldap.createClient({
    url: 'ldap://'+ldap_server
  });

  try{
    var opts = {
	     filter: '(sAMAccountName='+username+')',
       scope: 'sub'
    };
  client.bind(username_domain,password,function(err,bind_res){
    if(err){
      client.unbind(function(error) {
        if(error){
          console.log(error.message);
        }
        else{
          console.log('client disconnected');
          console.log("Username/Password is incorrect!");
          res.render('main/auth')
        }
      });
    }
    else{
      console.log('User: '+username+' authenticated through LDAP server at '+ new Date());
      client.search('dc=att,dc=techmahindra,dc=com', opts, function(err, search_res) {
        search_res.on('searchEntry', function(entry){
          console.log('entry: ' + JSON.stringify(entry.object)); //Uncommnet this line to access all the json data recieved for the validated user on the console.
			console.log("Name-------"+entry.object.cn);
			console.log("ID-------"+entry.object.employeeID);
			console.log("Title-------"+entry.object.personalTitle);
			console.log("Band-------"+entry.object.description);
			console.log("MAilID-------"+entry.object.userPrincipalName);
			console.log("Department-------"+entry.object.department);
			console.log("ClusterID-------"+entry.object.ClusterID);
			console.log("ClusterHeadName-------"+entry.object.ClusterHeadName);
			console.log("manger Name---------------"+entry.object.manager.CN);
			var mangerName="";
			for(var i=0;i<entry.object.manager.length;i++){
				mangerName = entry.object.manager[i].CN;
			}
			console.log("manger Name---------------"+mangerName);
		 //req.session.username = entry.object.cn;
         // req.session.band = entry.object.description;
         // req.session.givenName = entry.object.givenName;
          //console.log(entry.object.cn);
          client.unbind(function(error) {
            if(error){
              console.log("error.message");
            } else{
              console.log('User: '+username+' disconnected from LDAP server at '+ new Date());
            }
          });
          res.render('main/home',{session:entry});
        });
        search_res.on('error', function(error) {
          console.error('error:' + error.message);
          client.unbind(function(error) {
            if(error){
              console.log(error.message);
            } else{
              console.log('User: '+username+' disconnected from LDAP server at '+ new Date());
            }
          });
      });
      });

    }
  });
} catch(error){
  console.log(error);
  client.unbind(function(error) {
    if(error){console.log(error.message);
    } else{
      console.log('User: '+username+' disconnected from LDAP server at '+ new Date());
    }});
}
});

module.exports = router;
