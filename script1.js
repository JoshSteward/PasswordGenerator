// user input variables 
var length; 
var specialCharacters; 
var upper;
var lower;
var confirmNumbers;
var criteria;

//potential inputs to password
specialCharacters = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]; 
lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var get = document.querySelector("#generate");

get.addEventListener("click", function () {
    ps = generatePassword();
    document.getElementById("password").placeholder = ps;
});

function generatePassword() {
    length = prompt('Please pick a password length between 8 and 128 Characters');
    length = +length;
    if (length < 8 || length > 128) {
        alert("Incorredt value added");
}   else { 
    confirmSpecialCharacters = confirm("Do you want this password to include speical characters?");
    confirmUpper = confirm("Do you want this password to include uppercase letters?");
    confirmLower = confirm("Do you want this password to include lowercase letters?");
    confirmNumbers = confirm("Do you want this password to include numbers?");
} 

    const typesArr = [{upper}, {lower}, {confirmNumbers}, {specialCharacters}].filter(item => Object.values(item)[0]);
    console.log(typesArr);

    const typesCount = upper + lower + confirmNumbers + specialCharacters;
    console.log(typesCount); 

    var passwordParam=[];

    if(confirmSpecialCharacters) {
        passwordParam = passwordParam.concat(specialCharacters);
    } 

    if (confirmUpper) {
        passwordParam = passwordParam.concat(upperCase);
    }

    if (confirmLower) {
        passwordParam = passwordParam.concat(lowerCase);
    }

    if (confirmNumbers) {
        passwordParam = passwordParam.concat(numbers);
    }

    console.log(passwordParam);

    var passwordRandom = ""

    for (var i = 0; i < length; i++) {
        passwordRandom = passwordRandom + passwordParam[Math.floor(Math.random()*passwordParam.length)];
        console.log(passwordRandom);
    }
    return passwordRandom; 
           
  // Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;

}

function userInput(ps) {
    document.getElementById("password").textContent = ps;
}

}
  

