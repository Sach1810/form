//******** index.html **********
var users = [];

var success = function(){

  
  var user = {
    First: document.forms["joinus"]["firstname"].value,
    Last: document.forms["joinus"]["lastname"].value,
    Email: document.forms["joinus"]["email"].value,
    User: document.forms["joinus"]["username"].value,
    Password: document.forms["joinus"]["password"].value
  };
  users.push(user);

  alert("Congratulations " + user.First + " you have registered!");
  
 for (var i = 0; i < users.length; i++){
    if (document.forms["joinus"]["email"].value == users[i].email){
      alert("duplicate email");

    };
  }

  f = document.forms["joinus"]["firstname"].value = null;
  l = document.forms["joinus"]["lastname"].value = null;
  e = document.forms["joinus"]["email"].value = null;
  u = document.forms["joinus"]["username"].value = null;
  pOne = document.forms["joinus"]["password"].value = null;
  pTwo = document.forms["joinus"]["repeatpassword"].value = null;
  
};


var validateForm = function() {
  var counter = 0;
  var f = document.forms["joinus"]["firstname"].value;
  var l = document.forms["joinus"]["lastname"].value;
  var e = document.forms["joinus"]["email"].value;
  var u = document.forms["joinus"]["username"].value;
  var pOne = document.forms["joinus"]["password"].value;
  var pTwo = document.forms["joinus"]["repeatpassword"].value;

  var emailVerificationOne = e.indexOf('@');
  var emailVerificationTwo = e.indexOf('.'); 

  var specialChar = /^(?=.*[0-9_\W]).+$/;


//First Name validation
  if (f == null || f === "") {
   $(".hidefirst").addClass("show");
   $(".hidefirst").removeClass(".hidefirst");
   counter -= 1; 
  } else {
    counter += 1;
  };

  //Last Name Validation
  if (l == null || l === "") {
   $(".hidelast").addClass("show");
   $(".hidelast").removeClass(".hidelast");
   counter -= 1; 
  } else {
    counter += 1; 
  };

  //Email validation
  if (emailVerificationOne < 0 || emailVerificationTwo < 0 ){
  $(".hideemail").addClass("show");
   $(".hideemail").removeClass(".hideemail");
  counter -= 1; 
  } else {
    counter += 1; 
  };

  //Username
  if (u.length < 5){
    $(".hideusername").addClass("show");
   $(".hideusername").removeClass(".hideusername");
    counter -= 1; 
  } else {
    counter += 1; 
  };
  //Password - password must be atleast 8 characters & contain number or special character
  if (pOne == null || pOne.length <= 7 || specialChar.test(pOne) == false){
   // $(".hidepassword").addClass("show");
  // $(".hidepassword").removeClass(".hidepassword");
    counter -= 1; 

  }else {
    counter += 1; 
  };

  //Password Match
  if (pTwo == null || pTwo == "" || pOne !== pTwo){
    $(".hiderpassword").addClass("show");
   $(".hiderpassword").removeClass(".hiderpassword");
    counter -= 1; 

  }else {
    counter += 1; 
  };

  if (counter == 6) {
    success();
  };
};

$(document).ready(function(){
    $("#passwordmain").keyup (function(){
        var pCheckLive = document.forms["joinus"]["password"].value;
        var specialCharLive = /^(?=.*[0-9_\W]).+$/;
        var key = event.keyCode || event.charCode;
        if (pCheckLive.length >= 7){
            $(".passwordwrongone").addClass("passwordrightone");
            $(".passwordwrongone").removeClass("passwordwrongone"); 
        } else if (pCheckLive.length < 7){
            $(".passwordone").addClass("passwordwrongone");
            $(".passwordone").removeClass("passwordone");    
            };

            if (specialCharLive.test(pCheckLive) == false){
            $(".passwordtwo").addClass("passwordwrongtwo");
            $(".passwordtwo").removeClass("passwordtwo"); 
            } else if (specialCharLive.test(pCheckLive) == true){
            $(".passwordwrongtwo").addClass("passwordrighttwo");
            $(".passwordwrongtwo").removeClass("passwordwrongtwo");    
            };

            if (specialCharLive.test(pCheckLive) == true){
              $(".passwordtwo").addClass("passwordrighttwo");
              $(".passwordtwo").removeClass("passwordtwo");
          };
            if( key == 8 || key == 46 ){
              if(pCheckLive.length < 7){
              $(".passwordrightone").addClass("passwordwrongone");
              $(".passwordrightone").removeClass("passwordrightone");
              };
              if(specialCharLive.test(pCheckLive) == false){
              $(".passwordrighttwo").addClass("passwordwrongtwo");
              $(".passwordrighttwo").removeClass("passwordrighttwo");
              };



            
            };
        });
});

//********** END index.html ***********