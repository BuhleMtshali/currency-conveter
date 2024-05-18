let inputConvertElement = document.querySelector("#dollar-input");
let inputRandElement = document.querySelector("#rand-input");

function convertNow(event) {
  event.preventDefault();
  let dollarValue = parseFloat(inputConvertElement.value); //this line retrieves the value from the input field to float value
  let randValue = dollarValue * 18.33;
  inputRandElement.value = Math.floor(randValue);
}

let buttonConvertElement = document.querySelector("#convert-button");
buttonConvertElement.addEventListener("click", convertNow);

function resetNow(event) {
  event.preventDefault();
  inputConvertElement.value = ""; //this will bring back the input placeholder
  inputRandElement.value = "";
}

let resetButtonElement = document.querySelector("#reset-button");
resetButtonElement.addEventListener("click", resetNow);
