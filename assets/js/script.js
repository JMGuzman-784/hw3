// Assignment Code
let generateBtn = document.querySelector("#generate");

// Arrays of letters and special characters
let lcLetters = "abcdefghijklmnopqrstuvwxyz";
let ucLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let pwNumbers = "1234567890";
let spCharacters = "!@#$%^&*";
let password = [];

// Generate password function
function generatePassword() {
  // Assign a variable to length of the password
  let wordBank = "";
  let passwordLength = prompt("Please choose a password length.");

  // Password Length validation
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Please choose a password length between 8 and 128 characters.");
    generatePassword();
  }

  let trueLc = confirm("Would you like to use lower case letters?");
  let trueUp = confirm("Would you like to use upper case letters?");
  let trueNumbers = confirm("Would you like to use numbers?");
  let trueSpecChar = confirm("Would you like to use special characters?");

  // Loop through array of letters
  if (trueLc) {
    wordBank += lcLetters;
  }
  if (trueUp) {
    wordBank += ucLetters;
  }
  if (trueNumbers) {
    wordBank += pwNumbers;
  }
  if (trueSpecChar) {
    wordBank += spCharacters;
  }

  for (let i = 0; i < passwordLength; i++ ) {
    var randomLetter = generateRandom(wordBank.split(""));
    password.push(randomLetter);
  }
  // Return a final password as a string
  return password.join("");
}
function generateRandom(character) {
  let index = Math.floor(Math.random() * spCharacters.length);
  return character[index];
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
