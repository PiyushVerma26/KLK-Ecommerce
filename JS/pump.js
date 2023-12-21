import {
  handleAddClick,
  handleMinusClick,
  cartItemLength,
  handleCartClick,
  AddItemToCart,
} from "./IncreDecre.js";
let Amount = 0;
let Name = "";
const addPump = document.querySelector("#addPump");
const minusPump = document.querySelector("#minusPump");
let quantityPump = document.getElementById("quantityPump");

const pumpCart = document.querySelector("#pumpCart");
const select = document.querySelector("#slectModule");
const cost = document.querySelector("#paisa");
select.addEventListener("change", handleSelectChange);

addPump.addEventListener("click", () => {
  let quantityPumpVal = parseInt(quantityPump.value, 10);
  let result = handleAddClick(quantityPumpVal);
  quantityPump.value = result;
});
minusPump.addEventListener("click", () => {
  let quantityPumpVal = parseInt(quantityPump.value, 10);
  let result = handleMinusClick(quantityPumpVal);
  quantityPump.value = result;
});
const number = document.querySelector("#number");
let result = cartItemLength();
if (result > 0) {
  number.innerHTML = result;
} else {
  number.innerHTML = 0;
}

function handleSelectChange(event) {
  let value = event.target.value;
  console.log(value);
  if (value === "1") {
    cost.innerText = "10000";
    Amount = 10000;
    Name = "Lithium-Ion 1kw";
  } else if (value === "2") {
    cost.innerText = "20000";
    Amount = 20000;
    Name = "Lithium-Ion 2kw";
  } else if (value === "3") {
    cost.innerText = "30000";
    Amount = 30000;
    Name = "Lithium-Ion 3kw";
  } else if (value === "4") {
    cost.innerText = "40000";
    Amount = 40000;
    Name = "Lithium-Ion 4kw";
  } else {
    cost.innerText = "10000-50000";
  }
}

pumpCart.addEventListener("click", () => {
  console.log("clicked");
  let quantity = parseInt(quantityPump.value, 10);
  let outPut = handleCartClick(quantity, Amount, Name);
  if (outPut == true) {
    const moduleObj = {
      name: `${Name}`,
      amount: `${Amount}`,
      quantity: `${quantity}`,
    };
    AddItemToCart(moduleObj);
    let result = cartItemLength();
    number.innerHTML = result;
  }
  cartItemLength();
});
