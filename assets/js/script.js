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
  // Ask what kind of characters should the password include
  let trueLc = confirm("Would you like to use lower case letters?");
  let trueUp = confirm("Would you like to use upper case letters?");
  let trueNumbers = confirm("Would you like to use numbers?");
  let trueSpecChar = confirm("Would you like to use special characters?");
  // If all are not answered ask following 
  if (trueLc == false && trueUp == false && trueNumbers == false && trueSpecChar == false) {
    alert("Please choose atleast one type of character.");
    generatePassword();
  }

  // Loop through array of letters
  // If an lc is wanted make sure that it does not add onto the required characters
  if (trueLc) {
    wordBank += lcLetters;
    let lccharacter = lcLetters[Math.floor(Math.random() * lcLetters.length)];
    password.push(lccharacter)
    passwordLength--
  } 
  // If an uc is wanted make sure that it does not add onto the required characters
  if (trueUp) {
    wordBank += ucLetters;
    let uccharacter = ucLetters[Math.floor(Math.random() * ucLetters.length)];
    password.push(uccharacter)
    passwordLength--
  }
  // If a number is wanted make sure that it does not add onto the required characters
  if (trueNumbers) {
    wordBank += pwNumbers;
    let pwNumber = pwNumbers[Math.floor(Math.random() * pwNumbers.length)];
    password.push(pwNumber)
    passwordLength--
  }
  // If a special character is wanted make sure that it does not add onto the required characters
  if (trueSpecChar) {
    wordBank += spCharacters;
    let spcharacter = spCharacters[Math.floor(Math.random() * spCharacters.length)];
    password.push(spcharacter)
    passwordLength--
  }
  // Allow password to be sent back to box as a generated password
  function generateRandom(character) {
    let index = Math.floor(Math.random() * wordBank.length);
    return character[index];
  }

  for (let i = 0; i < passwordLength; i++ ) {
    var randomLetter = generateRandom(wordBank.split(""));
    password.push(randomLetter);
  }
  // Return a final password as a string
  return password.join("");
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
