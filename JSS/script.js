const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");
const clearBtn = document.getElementById("clear");
const equalsBtn = document.getElementById("equals");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    display.value += button.dataset.value;
  });
});
clearBtn.addEventListener("click", () => {
  display.value = "";
});
equalsBtn.addEventListener("click", () => {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = "Error";
  }
});
