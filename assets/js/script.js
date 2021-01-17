var generateBtn = document.querySelector("#generate");
charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
var r = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
var upperCaseLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
var numericalCharsArr = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
var specialCharsArr = [' ', '!', '#', '$', '%', '&', '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~', '"', "'"]
var userArray = [];



function generatePassword() {

  var firstQuestion = window.prompt("How long would you like your password to be between 8 and 128 characters?");

  if (firstQuestion >= 8 && firstQuestion <= 128) {
    var secondQuestion = window.confirm("Would you like uppercase characters?");
    if (secondQuestion == true) {
      userArray = upperCaseLetters.concat(userArray);
    }

    var thirdQuestion = window.confirm("would you like lowercase characters?");
    if (thirdQuestion == true) {
      userArray = r.concat(userArray)
    }

    var fourthQuestion = window.confirm("would you like to use numeric characters?");
    if (fourthQuestion == true) {
      userArray = numericalCharsArr.concat(userArray);

    }

    var fifthQuestion = window.confirm("would you like to use special characters?");
    if (fifthQuestion == true) {
      userArray = specialCharsArr.concat(userArray);
    }
    

    var retVal = [];
    for (var i = 0, n = userArray.length; i < firstQuestion; ++i) {
      var thePassword = userArray[Math.floor(Math.random() * n)];
      retVal.push(thePassword)
    }

    return retVal;

  }
}

// Write password to the #password input
function writePassword() {


  var password = generatePassword();

  var passwordText = document.querySelector("#password");
  passwordText.value = password;


}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword,);