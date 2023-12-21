import {
  handleAddClick,
  handleMinusClick,
  handleCartClick,
  cartItemLength,
  AddItemToCart,
} from "./IncreDecre.js";
const cost = document.querySelector("#paisa");
const select = document.querySelector("#slectModule");
const cart = document.querySelector("#solarCart");
const add = document.querySelector("#add");
const minus = document.querySelector("#minus");
let initialValue = document.getElementById("quantity");

let Amount = 0;
let Name = "";
function handleSelectChange(event) {
  let value = event.target.value;
  console.log(value);
  if (value === "Poly") {
    cost.innerText = "20000";
    Amount = 20000;
    Name = "Polycrystalline";
  } else if (value === "mono") {
    cost.innerText = "10000";
    Amount = 10000;
    Name = "Monocrystalline";
  } else {
    cost.innerText = "10000-50000";
  }
}

const number = document.querySelector("#number");
let result = cartItemLength();
number.innerHTML = result;
select.addEventListener("change", handleSelectChange);
add.addEventListener("click", () => {
  let number = parseInt(initialValue.value, 10);
  let newValue = handleAddClick(number);
  initialValue.value = newValue;
});
minus.addEventListener("click", () => {
  let number = parseInt(initialValue.value, 10);
  let newValue = handleMinusClick(number);
  initialValue.value = newValue;
});

cart.addEventListener("click", () => {
  let quantity = parseInt(initialValue.value, 10);
  let outPut = handleCartClick(quantity, Amount, Name);
  if (outPut == true) {
    const moduleObj = {
      name: `${Name}`,
      amount: `${Amount}`,
      quantity: `${quantity}`,
    };
    AddItemToCart(moduleObj);
    let result = cartItemLength();
    if (result > 0) {
      number.innerHTML = result;
    } else {
      number.innerHTML = 0;
    }
  }
  cartItemLength();
});
