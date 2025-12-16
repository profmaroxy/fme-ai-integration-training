const count = {
  value: 0,
};

function increase() {
  count.value += 1;
  displayCount();
}

function decrease() {
  count.value -= 1;
  displayCount();
}

function reset() {
  count.value = 0;
  displayCount();
}

function doubleCount() {
  count.value = count.value * 2;
  displayCount();
}

function displayCount() {
  const countElement = document.getElementById("count");
  countElement.textContent = count.value;
}

document.getElementById("increaseBtn").addEventListener("click", increase);
document.getElementById("decreaseBtn").addEventListener("click", decrease);
document.getElementById("resetBtn").addEventListener("click", reset);
document.getElementById("doubleBtn").addEventListener("click", doubleCount);