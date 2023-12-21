import {
  handleAddClick,
  handleMinusClick,
  handleCartClick,
  AddItemToCart,
  cartItemLength,
} from "./IncreDecre.js";

const cartTotal = document.querySelector(".cart-total");
const emptyCart = document.querySelector(".empty-cart");
const empty = document.querySelector("#empty");
const number = document.querySelector("#number");

function attachRemoveListeners() {
  const del = document.querySelectorAll(".trash");
  del.forEach((item, index) => {
    item.addEventListener("click", () => {
      removeFromCart(index);
    });
  });
}

function displayCartItems() {
  const cartItemsDiv = document.querySelector(".cart-items");
  cartItemsDiv.innerHTML = "";

  let cartItems = JSON.parse(localStorage.getItem("Data"));
  let total = 0;

  if (cartItems && cartItems.length > 0) {
    emptyCart.style.display = "none";

    cartItems.forEach((item, index) => {
      const cartItemDiv = document.createElement("div");
      cartItemDiv.classList.add("cart-item");
      cartItemDiv.innerHTML = `
        <div class="item-info">
          <div class="item-details">
            <div class="item-name"><span class="bold">Product Name: </span>${item.name}</div>
            <div class="item-price"><span class="bold">Amount: $</span>${item.amount}</div>
          </div>
          <div class="item-quantity">
            <div class="item-price"><span class="bold">Quantity: </span>${item.quantity}</div>
            <button class="trash">Remove</button>
          </div>
        </div>
      `;
      cartItemsDiv.appendChild(cartItemDiv);
      total += item.amount * item.quantity;
    });

    cartTotal.textContent = `Total: $${total.toFixed(2)}`;
  } else {
    emptyCart.style.display = "block";
    cartTotal.textContent = "Total: $0.00";
  }

  attachRemoveListeners();
}

displayCartItems();

function removeFromCart(index) {
  console.log("removed" + index);
  let cartItems = JSON.parse(localStorage.getItem("Data"));

  if (index !== -1) {
    cartItems.splice(index, 1);
    localStorage.setItem("Data", JSON.stringify(cartItems));
    displayCartItems();
    number.innerHTML = cartItemLength();
  }
}

empty.addEventListener("click", () => {
  localStorage.removeItem("Data");
  number.innerHTML = 0; // Set the cart item count to zero when the cart is emptied
  displayCartItems();
});
