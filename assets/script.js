// Assignment code here

//get length of password

var getLength = function() {
  var length = prompt("Enter a password length between 8 - 128 characters")

  //check for integer between 8-128

  while (Number.isInteger(length)){

length = Math.min, 8;
length = Math.max, 128;

writePassword()

  }

prompt("Enter a valid number between 8 - 128")

};

//char types upper, lower, numeric, special

var getChar = function() {
  
}


//one char of each type (min) in password

//password generated and written on the page



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
