let charactersLower = "abcdefghijklmnopqrstuvwxyz";
let charactersUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let charactersNumber = "1234567890";
let charactersSpecial = " !#$%&'()*+,-./:;<=>?@[]^_`{|}~" + '"';
const possibleChars = [];
const password = [];

let generate = function () {
  var passChar = window.prompt("How many characters? (8-128)");

  if ((passChar < 8, passChar > 128)) {
    alert("requires 8-128 characters");
  }
  if (confirm("Press okay to add lowercase characters.") == true) {
    possibleChars.push(charactersLower);
  }

  if (confirm("Press okay to add uppercase characters.") == true) {
    possibleChars.push(charactersUpper);
  }

  if (confirm("Press okay to add numbers.") == true) {
    possibleChars.push(charactersNumber);
  }

  if (confirm("Press okay to add special characters.") == true) {
    possibleChars.push(charactersSpecial);
  }

  if (possibleChars.length === 0) {
    alert("Need to confirm at least one character set to proceed");
    generate();
  }
  console.log(passChar);
  allChars = possibleChars.join("");
  const splitChars = allChars.split("");

  for (let i = 0; i < passChar; i++) {
    const randomChar =
      splitChars[Math.floor(Math.random() * splitChars.length)];
    password.push(randomChar);
  }
  finalPassword = password.join("");
  document.getElementById("password").innerHTML = finalPassword;
};
