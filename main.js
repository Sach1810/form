var firstName = null;
var lastName = null;
var email = null;
var username = null;
var password = null;


var specialCharacters = /^(?=.*[0-9_\W]).+$/;

var validation = {
  firstName: "Please type your first name",
  lastName:  "Please type your last name",
  email: "Please type in a valid email address",
  username: "Please make sure username is at least 5 characters",
  repeatPassword: "Please make sure passwords match!"
};


// ********** Check for duplicate username and email **********
var duplicate = function duplicte(){

}; // ********** END OF DUPLICATE FUNCTION **********


// ********** If everything is correct **********
var success = function success(){

}; // ********** END OF DUPLICATE FUNCTION **********


//********** MAIN SUBMIT BUTTON FUNCTION **********
var submitForm = function (){
 
  //***** First Name *****
  firstName = $('#firstNameInput').val();
  
  if (firstName == null || firstName === "") {
    $('#firstNameError').text(validation.firstName);
  } else  {
  $('#firstNameError').empty();
};

  //***** Last Name *****
  lastName = $('#lastNameInput').val();

  if (lastName == null || lastName ==="") {
    $('#lastNameError').text(validation.lastName);
  } else {
    $('#lastNameError').empty();
  };

  //***** Email ******
  email = $('#emailInput').val();
  var emailVerificationOne = email.indexOf('@');
  var emailVerificationTwo = email.indexOf('.');

  if (emailVerificationOne < 0 || emailVerificationTwo < 0) {
    $('#emailError').text(validation.email);
  } else {
    $('#emailError').empty();
  };

  //***** Username *****
  username = $('#usernameInput').val();

  if (username.length < 5) {
    $('#usernameError').text(validation.username);
  } else {
    $('#usernameError').empty();
  };

  //***** Repeat Password *****
  var repeatPassword = $('#repeatPasswordInput').val();

  if (repeatPassword !== password) {
    $('#repeatPasswordError').text(validation.repeatPassword);
  } else {
    $('#repeatPasswordError').empty();
  };

}; // ********** END OF SUBMIT BUTTON FUNCTION **********

// ********** Password live validation checker **********
$(document).ready(function(){
  $('#passwordInput').keyup(function(){
        password = $('#passwordInput').val()
        if (password.length < 7) {
          console.log("less than 7");
          $('#characters').css ("color","red");
        } else if (password.length >=7) {
          $('#characters').css ("color","green");
        };

        if (specialCharacters.test(password) == false) {
          $('#special').css ("color","red");
        } else {
          $('#special').css ("color","green");

        };
      }
    );
  }
);
// ********** End password validation checker *********