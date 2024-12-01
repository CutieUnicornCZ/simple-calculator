"use strict";

let screen = document.getElementById("screen");
const btn = document.querySelectorAll("button");

let screenArray = [];
let equalCalc;

const screenDlt = function () {
  screen.textContent = "0";
  screenArray = [];
};

// Screen start state
screenDlt();

function calc(button) {
  const buttonValue = button.textContent;
  if (buttonValue === "CLEAR") {
    screenDlt();
    screenArray = [];
  } else if (buttonValue === "=") {
    screen.textContent = eval(equalCalc);
    screenArray = [];
  } else {
    screenArray.push(buttonValue);
    screen.textContent = screenArray.join("");
    equalCalc = screenArray.join("");
  }
}

btn.forEach((button) => button.addEventListener("click", () => calc(button)));
