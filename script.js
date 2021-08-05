"use strict";

const custom = document.querySelector(".left-side__tip-custom");
const btn5 = document.querySelector(".btn5");
const btn10 = document.querySelector(".btn10");
const btn15 = document.querySelector(".btn15");
const btn25 = document.querySelector(".btn25");
const btn50 = document.querySelector(".btn50");
const bill = document.querySelector(".left-side__bill-input");
const people = document.querySelector(".left-side__people-input");
const tip = document.querySelector(".right-side__tip-amount-calc");
const total = document.querySelector(".right-side__total-calc");
const reset = document.querySelector(".btn-reset");
const labelZero = document.querySelector(".left-side__people-zero");

let tipPercent = 0;

btn5.addEventListener("click", function () {
  tipPercent = +btn5.value;
  btn5.style.backgroundColor = "hsl(172, 67%, 45%)";
  btn5.style.color = "hsl(183, 100%, 15%)";
  btn10.style.backgroundColor = "hsl(183, 100%, 15%)";
  btn10.style.color = "#fff";
  btn15.style.backgroundColor = "hsl(183, 100%, 15%)";
  btn15.style.color = "#fff";
  btn25.style.backgroundColor = "hsl(183, 100%, 15%)";
  btn25.style.color = "#fff";
  btn50.style.backgroundColor = "hsl(183, 100%, 15%)";
  btn50.style.color = "#fff";
});
btn10.addEventListener("click", function () {
  tipPercent = +btn10.value;
  btn5.style.backgroundColor = "hsl(183, 100%, 15%)";
  btn5.style.color = "#fff";
  btn10.style.backgroundColor = "hsl(172, 67%, 45%)";
  btn10.style.color = "hsl(183, 100%, 15%)";
  btn15.style.backgroundColor = "hsl(183, 100%, 15%)";
  btn15.style.color = "#fff";
  btn25.style.backgroundColor = "hsl(183, 100%, 15%)";
  btn25.style.color = "#fff";
  btn50.style.backgroundColor = "hsl(183, 100%, 15%)";
  btn50.style.color = "#fff";
});
btn15.addEventListener("click", function () {
  tipPercent = +btn15.value;
  btn5.style.backgroundColor = "hsl(183, 100%, 15%)";
  btn5.style.color = "#fff";
  btn10.style.backgroundColor = "hsl(183, 100%, 15%)";
  btn10.style.color = "#fff";
  btn15.style.backgroundColor = "hsl(172, 67%, 45%)";
  btn15.style.color = "hsl(183, 100%, 15%)";
  btn25.style.backgroundColor = "hsl(183, 100%, 15%)";
  btn25.style.color = "#fff";
  btn50.style.backgroundColor = "hsl(183, 100%, 15%)";
  btn50.style.color = "#fff";
});
btn25.addEventListener("click", function () {
  tipPercent = +btn25.value;
  btn5.style.backgroundColor = "hsl(183, 100%, 15%)";
  btn5.style.color = "#fff";
  btn10.style.backgroundColor = "hsl(183, 100%, 15%)";
  btn10.style.color = "#fff";
  btn15.style.backgroundColor = "hsl(183, 100%, 15%)";
  btn15.style.color = "#fff";
  btn25.style.backgroundColor = "hsl(172, 67%, 45%)";
  btn25.style.color = "hsl(183, 100%, 15%)";
  btn50.style.backgroundColor = "hsl(183, 100%, 15%)";
  btn50.style.color = "#fff";
});
btn50.addEventListener("click", function () {
  tipPercent = +btn50.value;
  btn5.style.backgroundColor = "hsl(183, 100%, 15%)";
  btn5.style.color = "#fff";
  btn10.style.backgroundColor = "hsl(183, 100%, 15%)";
  btn10.style.color = "#fff";
  btn15.style.backgroundColor = "hsl(183, 100%, 15%)";
  btn15.style.color = "#fff";
  btn25.style.backgroundColor = "hsl(183, 100%, 15%)";
  btn25.style.color = "#fff";
  btn50.style.backgroundColor = "hsl(172, 67%, 45%)";
  btn50.style.color = "hsl(183, 100%, 15%)";
});
custom.addEventListener("change", function () {
  tipPercent = +custom.value / 100;
  btn5.style.backgroundColor = "hsl(183, 100%, 15%)";
  btn5.style.color = "#fff";
  btn10.style.backgroundColor = "hsl(183, 100%, 15%)";
  btn10.style.color = "#fff";
  btn15.style.backgroundColor = "hsl(183, 100%, 15%)";
  btn15.style.color = "#fff";
  btn25.style.backgroundColor = "hsl(183, 100%, 15%)";
  btn25.style.color = "#fff";
  btn50.style.backgroundColor = "hsl(183, 100%, 15%)";
  btn50.style.color = "#fff";
});

bill.addEventListener("input", function () {
  reset.style.backgroundColor = "hsl(172, 67%, 45%)";
});

people.addEventListener("input", function () {
  if (+people.value === 0) {
    people.style.border = "2px solid rgb(255, 72, 0)";
    labelZero.style.display = "block";
    reset.style.backgroundColor = "hsl(172, 67%, 45%)";
  } else {
    const billVal = +bill.value;
    const peopleVal = +people.value;
    let tipVal;
    reset.style.backgroundColor = "hsl(172, 67%, 45%)";
    people.style.border = "transparent";
    labelZero.style.display = "none";
    tipVal = Math.round((billVal * tipPercent + Number.EPSILON) * 100) / 100;
    tip.textContent = `$${
      Math.round(((billVal * tipPercent) / peopleVal + Number.EPSILON) * 100) /
      100
    }`;
    total.textContent = `$${
      Math.round(((billVal + tipVal) / peopleVal + Number.EPSILON) * 100) / 100
    }`;
  }
});

reset.addEventListener("click", function () {
  btn5.style.backgroundColor = "hsl(183, 100%, 15%)";
  btn5.style.color = "#fff";
  btn10.style.backgroundColor = "hsl(183, 100%, 15%)";
  btn10.style.color = "#fff";
  btn15.style.backgroundColor = "hsl(183, 100%, 15%)";
  btn15.style.color = "#fff";
  btn25.style.backgroundColor = "hsl(183, 100%, 15%)";
  btn25.style.color = "#fff";
  btn50.style.backgroundColor = "hsl(183, 100%, 15%)";
  btn50.style.color = "#fff";
  tipPercent = 0;
  people.value = "";
  bill.value = "";
  custom.value = "";
  tip.textContent = "$0.00";
  total.textContent = "$0.00";
  reset.style.backgroundColor = "hsla(172, 67%, 45%, 0.1)";
});
