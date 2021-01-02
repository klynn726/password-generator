// Assignment code here

//get length of password
//check for integer between 8-128

var getLength = function() {
  var length = prompt("Enter a password length between 8 - 128 characters")

  while (parseInt(length)){

    8 <= length <= 128;

    getCharTypes()

  }

  getLength()

};


//char types upper, lower, numeric, special

var getCharTypes = function() {

  While (upper === false && lower === false && num === false && special === false){
  alert("Please enter one or more character types")

  var upper = confirm("Do you want upper case letters?")
  if (upper === true){
    passwordText.value.push(/[A-Z]/)
  }

  var lower = confirm("Do you want lower case letters?")
  if (lower === true){
   passwordText.value.push(/[a-z]/)
  }
  
  var num = confirm("Do you want numbers?")
  if (num === true){
    passwordText.value.push(/[0-9]/)
  }

  var special = confirm("Do you want special characters?")
  if (special === true){

    passwordText.value.push(/["!","@","#","$","%","^","&","*","(",")","{","}","]/)

  }
  }
}

var passwordText = {

    value: []
}

//one char of each type (min) in password
//password generated and written on the page

for (i=0; i < length; i++){
  passwordText.value
  writePassword()
}


getLength()



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
