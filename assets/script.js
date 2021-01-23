
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


//get length of password
//check for integer between 8-128
var length = 0
var up = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var down = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var num = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
var sym = ["!","@","#","$","%","^","&","*","(",")","{","}"]
var passText = []
var choices = []

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

var getLength = function() {
  length = parseInt(prompt("Enter a password length between 8 - 128 characters"))

 while (length < 8 || length > 128){
   alert("Please enter a valid number between 8 - 128 characters");
   length = parseInt(prompt("Enter a password length between 8 - 128 characters"))
   return;
 }
 
}

//char types upper, lower, numeric, special
//push selected types into passwordText array
//check for any input ask for valid input

var getCharTypes = function() {

  var upper = confirm("Do you want upper case letters?")
  if (upper === true){
  choices.push([up])
}

  var lower = confirm("Do you want lower case letters?")
if (lower === true){
  choices.push([down])
 }

  var number = confirm("Do you want numbers?")
 if (number === true){
  choices.push([num])
}


  var special = confirm("Do you want special characters?")
if (special === true){
  choices.push([sym])
}


  if (upper === false && lower === false && num === false && special === false)
    {
    alert("Please enter one or more character types")
    getCharTypes()
  }
}


// add randomization to password array
// loop through random password array

function loop (){
  console.log (choices)
  for (var i = 0; i < length; i++){

    

// for (i = passText.length -1; i > 0; i--){
//   j = Math.floor(Math.random() * i)
//   k = choices[i]
//   choices[i] = choices[j]
//   choices[j] = passText
// }
// passText = num.toString
}
}

//one char of each type (min) in password
// function charTypeCheck(getCharTypes){
//   if (true)
//   passwordText[i]
//   i >= 1;
// }

//generate password 
function generatePassword() {
  getLength()
  getCharTypes()
  loop()
  // charTypeCheck()
  // writePassword()
  return "text"
  }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)

writePassword()