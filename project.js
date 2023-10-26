"use strict";
var buttons = document.getElementsByClassName("button");
var arr = [...buttons];
const root_theme = document.querySelector(":root");
const deleteBtn = document.getElementById("deleteBtn");
const resetBtn = document.getElementById("resetBtn");
const equalBtn = document.getElementById("equalBtn");
const screenResult = document.querySelector(".result");
const numbers = document.querySelector("#numbers");
const logo = document.querySelector(".calcLogo");
const toggles = document.querySelector(".tri-state-toggle");
const labels = document.querySelector(".labels");
const theme = document.querySelector(".theme");
const buttonsNumbers = document.querySelectorAll(".buttons");
const allButtons = document.querySelectorAll("button");

function calculate(expression) {
  try {
    return new Function("return " + expression)();
  } catch (error) {
    return "error";
  }
}

function operation(buttonValue) {
  if (buttonValue === "RESET") {
    screenResult.innerText = "";
  } else if (buttonValue === "DEL") {
    screenResult.innerText = screenResult.innerText.slice(0, -1);
  } else if (buttonValue === "=") {
    screenResult.innerText = calculate(screenResult.innerText);
  } else {
    screenResult.innerText += buttonValue;
  }
}

allButtons.forEach((button) => {
  let buttonValue = button.innerText;
  button.addEventListener("click", function () {
    operation(buttonValue);
  });
});

arr.forEach((element, index) => {
  element.addEventListener("click", () => {
    element.style.opacity = "1";
    if (index == 0) {
      root_theme.style.setProperty("--firstThem-bg", "hsl(222, 26%, 31%)");
      equalBtn.style.setProperty("--equal-toggler1", "hsl(6, 63%, 50%)");
      equalBtn.style.setProperty("--equal-shadowcol1", "hsl(6, 70%, 34%)");
      buttons[index].style.setProperty("--equal-toggler1", "hsl(6, 63%, 50%)");
      deleteBtn.style.setProperty("--res-delbgcolor1", " hsl(225, 21%, 49%)");
      deleteBtn.style.setProperty("--resdel-shadowcol1", "  hsl(224, 28%, 35%)");
      resetBtn.style.setProperty("--res-delbgcolor1", " hsl(225, 21%, 49%)");
      resetBtn.style.setProperty("--resdel-shadowcol1", "  hsl(224, 28%, 35%)");
      screenResult.style.setProperty(
        "--one-result-bgcolor",
        "hsl(224, 36%, 15%)"
      );
      screenResult.style.setProperty(
        "--equalresdel-color",
        " hsl(0, 0%, 100%)"
      );
      logo.style.setProperty("--equalresdel-color", " hsl(0, 0%, 100%)");
      numbers.style.setProperty("--one-toggkeys-bg", " hsl(223, 31%, 20%)");
      toggles.style.setProperty("--one-toggkeys-bg", " hsl(223, 31%, 20%)");
      labels.style.setProperty("--one-toggkeys-bg", " hsl(223, 31%, 20%)");
      theme.style.setProperty("--one-toggkeys-bg", " hsl(223, 31%, 20%)");
      theme.style.setProperty("--equalresdel-color", " hsl(0, 0%, 100%)");
      labels.style.setProperty("--equalresdel-color", " hsl(0, 0%, 100%)");
      buttonsNumbers.forEach((el) => {
        el.style.setProperty("--one-keyshadowcol", "hsl(28, 16%, 65%)");
        el.style.setProperty("--one-keybgcolor", " hsl(30, 25%, 89%)");
        el.style.setProperty("--one-numberscol", "hsl(221, 14%, 31%)");
      });
    } else if (index == 1) {
      root_theme.style.setProperty("--firstThem-bg", "hsl(0, 0%, 90%)");
      equalBtn.style.setProperty("--equal-toggler1", "hsl(25, 98%, 40%)");
      equalBtn.style.setProperty("--equal-shadowcol1", "hsl(25, 99%, 27%)");
      buttons[index].style.setProperty("--equal-toggler1", "hsl(25, 98%, 40%)");
      deleteBtn.style.setProperty("--res-delbgcolor1", " hsl(185, 42%, 37%)");
      resetBtn.style.setProperty("--res-delbgcolor1", " hsl(185, 42%, 37%)");
      screenResult.style.setProperty("--one-result-bgcolor", "hsl(0, 0%, 93%)");
      screenResult.style.setProperty(
        "--equalresdel-color",
        " hsl(60, 10%, 19%)"
      );
      logo.style.setProperty("--equalresdel-color", "hsl(60, 10%, 19%)");
      theme.style.setProperty("--equalresdel-color", "hsl(60, 10%, 19%)");
      labels.style.setProperty("--equalresdel-color", "hsl(60, 10%, 19%)");
      numbers.style.setProperty("--one-toggkeys-bg", "hsl(0, 5%, 81%)");
      toggles.style.setProperty("--one-toggkeys-bg", " hsl(0, 5%, 81%)");
      buttonsNumbers.forEach((el) => {
        el.style.setProperty("--one-keybgcolor", "hsl(30, 25%, 89%)");
        el.style.setProperty("--one-numberscol", "hsl(221, 14%, 31%)");
        el.style.setProperty("--resdel-shadowcol1", "hsl(185, 58%, 25%)");
      });
    } else {
      root_theme.style.setProperty("--firstThem-bg", "hsl(268, 75%, 9%)");
      equalBtn.style.setProperty("--equal-toggler1", "hsl(176, 100%, 44%)");
      equalBtn.style.setProperty("--equal-shadowcol1", "hsl(177, 92%, 70%)");
      buttons[index].style.setProperty(
        "--equal-toggler1",
        "hsl(176, 100%, 44%)"
      );
      deleteBtn.style.setProperty("--res-delbgcolor1", " hsl(281, 89%, 26%)");
      deleteBtn.style.setProperty("--resdel-shadowcol1", " hsl(285, 91%, 52%)");
      resetBtn.style.setProperty("--res-delbgcolor1", " hsl(281, 89%, 26%)");
      resetBtn.style.setProperty("--resdel-shadowcol1", " hsl(285, 91%, 52%)");
      screenResult.style.setProperty(
        "--one-result-bgcolor",
        " hsl(268, 71%, 12%)"
      );
      screenResult.style.setProperty(
        "--equalresdel-color",
        "hsl(52, 100%, 62%)"
      );
      logo.style.setProperty("--equalresdel-color", "hsl(52, 100%, 62%)");
      theme.style.setProperty("--equalresdel-color", "hsl(52, 100%, 62%)");
      labels.style.setProperty("--equalresdel-color", "hsl(52, 100%, 62%)");
      numbers.style.setProperty("--one-toggkeys-bg", " hsl(268, 71%, 12%)");
      toggles.style.setProperty("--one-toggkeys-bg", "  hsl(268, 71%, 12%)");
      buttonsNumbers.forEach((el) => {
        el.style.setProperty("--one-numberscol", "hsl(52, 100%, 62%)");
        el.style.setProperty("--one-keybgcolor", "hsl(268, 47%, 21%)");
        el.style.setProperty("--one-keyshadowcol", "hsl(290, 70%, 36%)");
      });
    }
    arr
      .filter(function (item) {
        return item != element;
      })
      .forEach((item) => {
        item.style.opacity = "0";
      });
  });
});
