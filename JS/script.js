import { cartItemLength } from "./IncreDecre.js";
const menuOpen = document.getElementById("icon");
const siderBar = document.getElementById("side");
const navBar = document.querySelector(".navBar");
const cross = document.querySelector(".cross");
menuOpen.addEventListener("click", () => {
  siderBar.style.display = "flex";
  navBar.style.display = "none";
});
cross.addEventListener("click", () => {
  siderBar.style.display = "none";
  navBar.style.display = "flex";
});
const number = document.querySelector("#number");
let result = cartItemLength();
if (result > 0) {
  number.innerHTML = result;
} else {
  number.innerHTML = 0;
}
