"use strict";

function getElement(selection) {
  const element = document.querySelector(selection);
  if (element) {
    return element;
  }
  throw new Error(`Check ${selection} selector, no such element exists`);
}

function Counter(element, value) {
  this.counter = element;
  this.value = value;
  this.increaseBtn = element.querySelector(".increase");
  this.decreaseBtn = element.querySelector(".decrease");
  this.resetBtn = element.querySelector(".reset");
  this.valueEl = element.querySelector(".value");
  this.valueEl.textContent = this.value;
  const increase = this.increase.bind(this);
  const decrease = this.decrease.bind(this);
  const reset = this.reset.bind(this);
  this.increaseBtn.addEventListener("click", increase);
  this.decreaseBtn.addEventListener("click", decrease);
  this.resetBtn.addEventListener("click", reset);
}

Counter.prototype.increase = function () {
  this.value++;
  this.valueEl.textContent = this.value;
  this.numberColor();
};

Counter.prototype.decrease = function () {
  this.value--;
  this.valueEl.textContent = this.value;
  this.numberColor();
};

Counter.prototype.reset = function () {
  this.value = 0;
  this.valueEl.textContent = this.value;
  this.numberColor();
};
Counter.prototype.numberColor = function () {
  if (this.value > 0) {
    this.valueEl.style.color = "green";
  } else if (this.value < 0) {
    this.valueEl.style.color = "red";
  } else {
    this.valueEl.style.color = "black";
  }
};

const firstCounter = new Counter(getElement(".first-counter"), 0);
const secondCounter = new Counter(getElement(".second-counter"), 0);
