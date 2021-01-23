
// // Get references to the #generate element
var generateBtn = document.querySelector("#generate");

var up = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var down = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var num = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
var sym = ["!","@","#","$","%","^","&","*","(",")","{","}"]
var passText = ""
var choices = []
var merged = []
var length = 0
var upper = false
var lower = false
var number = false
var special = false
var password = ""
var randomization = ""

function reset() {
  console.log("reset function")
  upper = false
  lower = false
  number = false
  special = false
  password = ""
  writePassword()
}

function writePassword(){
  //get length of password

 length = parseInt(prompt("Enter a password length between 8 - 128 characters"))

 //check for integer between 8-128
 while (length < 8 || length > 128){
  alert("Please enter a valid number between 8 - 128 characters");
  length = parseInt(prompt("Enter a password length between 8 - 128 characters"))
}
  // console.log("length value", length)

//request char types and push to choices array found syntax on javascript.info/array "push(...items) adds items to the end."

  var upper = confirm("Do you want upper case letters?")
  if (upper === true){
  choices.push(...up)
}

  var lower = confirm("Do you want lower case letters?")
if (lower === true){
  choices.push(...down)
 }

  var number = confirm("Do you want numbers?")
 if (number === true){
  choices.push(...num)
}


  var special = confirm("Do you want special characters?")
if (special === true){
  choices.push(...sym)
}

//confirm a selection was made 
  if (upper === false && lower === false && num === false && special === false)
    {
    alert("Please enter one or more character types")
    reset()
  }

  // console.log(choices)

  //add randomization
  
  for (var i = 0; i < length; i++){
    //this is similar to the code in activity 3 used to make something random
    randomization = Math.floor(Math.random() * choices.length)
    //this is a new variable that randomizes the choices array
    passText = choices[randomization] 
    //this is a new array with the output of the for loop, randomization, and choices
    merged.push(passText)
  }
  //w2schools this makes it a string so it can be wrriten on the page correctly
password = merged.join("")
//this writes the password to the HTML using the DOM
document.querySelector("#password").innerHTML = password
//this writes the password to the page
return password
}
//this listens for the click then starts the writePassword function
generateBtn.addEventListener("click", writePassword);