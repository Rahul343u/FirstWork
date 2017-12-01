$(document).ready(function(){
  $("#loginbtn").click(function(e){
    e.preventDefault();
    var usern = document.getElementById('uname').value;
    var pass = document.getElementById('pass').value;
    if(usern == '' || pass == ''){
      $("#authfailmsg").html("Username/Password cannot be empty");
      //alert("Username/Password cannot be empty");
    }
    else{
      $("#loginform").submit();
    }
  });
//Logic to check whether the browser is Internet Explorer or Mozilla or Chrome
var uA = window.navigator.userAgent;
if( uA.indexOf('MSIE ') > -1 || uA.indexOf('Trident/') > -1){
$('#loginbtn').css('display','none');
$('#authfailmsg').html('Incompatible Browser:Internet Explorer');
}
else{
var match = uA.match(/Firefox\/([0-9]+)\./);
var ver = match ? parseInt(match[1]) : 0;
if( ver < 48 ){
  $('#authfailmsg').html('Please Upgrade your Firefox version.');
}
}
});
