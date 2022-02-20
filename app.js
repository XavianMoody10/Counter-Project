"use strict";

const counterDisplay = document.querySelector("#counter-content p");
const addCounterBtn = document.querySelector(
  "#counter-content button:first-of-type"
);
const lowerCounterBtn = document.querySelector(
  "#counter-content button:last-child"
);
addCounterBtn.addEventListener("click", addCounter);
lowerCounterBtn.addEventListener("click", lowerCounter);

console.log(counterDisplay);
console.log(addCounterBtn);
console.log(lowerCounterBtn);

let updatedNumber = 0;

function addCounter() {
  updatedNumber >= 100 ? (updatedNumber = 0) : updatedNumber++;
  counterDisplay.textContent = updatedNumber;
  console.log(updatedNumber);
}

function lowerCounter() {
  updatedNumber <= 0 ? (updatedNumber = 100) : updatedNumber--;
  counterDisplay.textContent = updatedNumber;
  console.log(updatedNumber);
}
