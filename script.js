// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

  var passwordLength = prompt("How many characters would you like your password to be?");
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Passord must be between 8 and 128 characters")
  } else {
    console.log(passwordLength);
  }

  var lowerCase = prompt("Would you like lowercase letters? Yes or no"); 
  var lowerCase = lowerCase.toLowerCase();
  if (lowerCase === "yes") {
    console.log("Password to include lowercase? " + lowerCase); 
  }

  var upperCase = prompt("Would you like uppercase letter? Yes or no");
  var upperCase = upperCase.toLowerCase();
  if (upperCase === "yes") {
    console.log("Password to include uppercase? " + upperCase); 
  }

  var numbers = prompt("Would you like numbers to be included in your password? Yes or no");
  var numbers = numbers.toLowerCase();
  if (numbers === "yes") {
    console.log("Password to include numbers? " + numbers);
  }


  var specialCharacters = prompt("Do you want to include special characters?: Yes or no");
  var specialCharacters = specialCharacters.toLowerCase();
  if (specialCharacters === "yes") {
    console.log("Password to include special characters?: " +specialCharacters);
  }

  //Add DOM elements based on prompts 
  const resultEl = document.getElementById("result");
  const passwordLengthEl = document.getElementById("length");
  const lowerCaseEl = document.getElementById("lowercase");
  const upperCaseEl = document.getElementById("uppercase");
  const numbersEl = document.getElementById("numbers");
  const specialCharactersEl = document.getElementById("special");

  // constant containing all functions 
  cont randomFunc() = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: randomNumber,
    special: randomSpecial
  };

// functions to generate random letter 

function  getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random()*26)+65);
}

function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random()*26)+97);
}

function randomNumber() {
  return String.fromCharCode(Math.floor(Math.random()*10)+48);
}

function randomSpecial() {
  const symbols = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  return symbols[Math.floor(Math.random()*symbols.length)];

}

console.log(randomSpecial());

