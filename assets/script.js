//get length of password
//check for integer between 8-128
var length = 0
var up = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var down = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var num = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
var sym = ["!","@","#","$","%","^","&","*","(",")","{","}"]
var passwordText = []

var getLength = function() {
  length = parseInt(prompt("Enter a password length between 8 - 128 characters"))

 if (length < 8 || length > 128){
   alert("Please enter a valid number between 8 - 128 characters");
   length = parseInt(prompt("Enter a password length between 8 - 128 characters"))
   return;
 }

}



//char types upper, lower, numeric, special
//push selected types into passwordText array
//check for input

var getCharTypes = function() {

  var upper = confirm("Do you want upper case letters?")
  if (upper === true){
  passwordText.push([up])
}

  var lower = confirm("Do you want lower case letters?")
if (lower === true){
  passwordText.push([down])
 }

  var num = confirm("Do you want numbers?")
 if (num === true){
  passwordText.push([num])
}


  var special = confirm("Do you want special characters?")
if (special === true){
  passwordText.push([sym])
}


  if (upper === false && lower === false && num === false && special === false)
    {
    alert("Please enter one or more character types")
    getCharTypes()
  }
}

// add randomization to password array

function random(passwordText) {
  for (var i = passwordText.length -1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
  }
}


// loop through password array
//one char of each type (min) in password


for (i=0; i < passwordText.length; i++){
  passwordText[i];

}
//password generated and written on the page
  // writePassword()
 function generatePassword() {
  getLength()
  console.log(length)
  getCharTypes()
  checkCharTypes()
  return "ABC"
  }

// getLength()



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