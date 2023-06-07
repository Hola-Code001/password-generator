const passwordDisplay = document.getElementById("paswordDisplay");
const generateBtn = document.getElementById("generateBtn");

let character = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
let symbol = "@$.,_-+?";
let number = "1234567890";

console.log(symbol.length);

generateBtn.addEventListener("click", generatePassword);

function generatePassword() {
  let result = "";

  for (let i = 0; i < 2; i++) {
    for (let i = 0; i < 2; i++) {
      let randomNumber = Math.floor(Math.random() * number.length);
      let selectedNumber = number.substring(randomNumber, randomNumber + 1);

      result += selectedNumber;
    }

    for (let i = 0; i < 3; i++) {
      let randomLetter = Math.floor(Math.random() * character.length);
      let selectedCharacter = character.substring(
        randomLetter,
        randomLetter + 1
      );

      result += selectedCharacter;
    }

    let randomSymbol = Math.floor(Math.random() * symbol.length);

    let selectedSymbol = symbol.substring(randomSymbol, randomSymbol + 1);

    result += selectedSymbol;
  }

  passwordDisplay.textContent = result;
}
