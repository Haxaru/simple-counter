const display = document.querySelector(".display");
const decrease = document.querySelector(".dec");
const reset = document.querySelector(".res");
const increase = document.querySelector(".inc");

display.textContent = 0;

decrease.addEventListener("click", () => {
  display.textContent--;
});

reset.addEventListener("click", () => {
  display.textContent = 0;
});

increase.addEventListener("click", () => {
  display.textContent++;
});
