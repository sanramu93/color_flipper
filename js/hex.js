import { getHexColor } from "./helpers.js";

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", () => {
  const hexColor = getHexColor();
  color.textContent = hexColor;
  document.body.style.backgroundColor = hexColor;
});
