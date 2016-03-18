var firstName = null;  

var validation = {
  firstName: "Please type your first name",
  lastName:  "Please type your last name",
  email: "Please type in a valid email address",
  username: "Please make sure username is at least 5 characters",
  repeatPassword: "Please make sure passwords match!"
};


//********** Check for duplicate username and email **********
// var duplicate = function duplicte(){

// };

//********** MAIN SUBMIT BUTTON FUNCTION **********
var submitForm = function (){
 
  //***** First Name *****
  firstName = $('#firstNameInput').val();
  
  if (firstName == null || firstName === "") {
    $('#firstNameError').text(validation.firstName);
  } else  {
  $('#firstNameError').empty();
};

}; // ********** END OF SUBMIT BUTTON FUNCTION **********


