export function handleAddClick(number) {
  number += 1;
  return number;
}

export function handleMinusClick(number) {
  if (number > 0) {
    number -= 1;
  } else {
    number = 0;
  }
  return number;
}

export function handleCartClick(quantity, Amount, Name) {
  if (quantity === 0 || Amount <= 0 || Name === "Select Module") {
    if (quantity === 0) {
      alert("Please Set Quantity");
      return false;
    } else if (Amount <= 0) {
      alert("Please Select Type of Module");
      return false;
    } else {
      alert("Please Select Quantity and Type of Module");
      return false;
    }
  } else if (Name === "Select") {
    alert("Please Select Module Type");
    return false;
  }
  return true;
}

export function cartItemLength() {
  const storedData = localStorage.getItem("Data") || [];

  if (storedData) {
    try {
      const parsedData = JSON.parse(storedData);
      if (Array.isArray(parsedData)) {
        return parsedData.length;
      } else {
        return 0;
      }
    } catch (error) {
      return 0;
    }
  } else {
    return 0;
  }
}
export function AddItemToCart(newItem) {
  let storedData = JSON.parse(localStorage.getItem("Data")) || [];
  storedData.push(newItem);
  localStorage.setItem("Data", JSON.stringify(storedData));
}
