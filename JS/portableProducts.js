import {
  handleAddClick,
  handleMinusClick,
  handleCartClick,
  cartItemLength,
  AddItemToCart,
} from "./IncreDecre.js";
const number = document.querySelector("#number");
let result = cartItemLength();

if (result > 0) {
  number.innerHTML = result;
} else {
  number.innerHTML = 0;
}
const addProductProt = document.querySelectorAll(".addProductProt");
const minusProductProt = document.querySelectorAll(".minusProductProt");
const quantityProductProt = document.querySelectorAll(".quantityProductProt");
const cartBtnPort = document.querySelectorAll(".cartBtnPort");
const producttitle = document.querySelectorAll(".product-title");
const amountPort = document.querySelectorAll(".amountPort");

addProductProt.forEach((productsAdd, index) => {
  productsAdd.addEventListener("click", () => {
    let quantity = parseInt(quantityProductProt[index].value);
    let result = handleAddClick(quantity);
    quantityProductProt[index].value = result;
  });
});
minusProductProt.forEach((productsAdd, index) => {
  productsAdd.addEventListener("click", () => {
    let quantity = parseInt(quantityProductProt[index].value);
    let result = handleMinusClick(quantity);
    quantityProductProt[index].value = result;
  });
});
cartBtnPort.forEach((cartBtnPort, index) => {
  cartBtnPort.addEventListener("click", () => {
    let quantity = parseInt(quantityProductProt[index].value);
    let name = producttitle[index].innerText;
    let amount = amountPort[index].innerText;
    let output = handleCartClick(quantity, amount, name);

    if (output == true) {
      const moduleObj = {
        name: `${name}`,
        amount: `${amount}`,
        quantity: `${quantity}`,
      };

      AddItemToCart(moduleObj);
      let result = cartItemLength();
      number.innerHTML = result;
    }
    quantityProductProt[index].value = 0;
  });
});
