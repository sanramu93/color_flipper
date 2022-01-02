import { getSimpleColor } from "./helpers.js";

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

let currentColor = "";

btn.addEventListener("click", () => {
  const simpleColor = getSimpleColor();
  color.textContent = simpleColor;
  document.body.style.backgroundColor = simpleColor;
});
