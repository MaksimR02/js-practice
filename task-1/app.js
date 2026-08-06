const products = [
  {
    id: 1,
    title: "Lenovo Yoga",
    price: 3000,
  },
  {
    id: 2,
    title: "Acer Aspire",
    price: 1800,
  },
  {
    id: 3,
    title: "Dell Vostro",
    price: 3400,
  },
];

let order = [];

function addToBasket(productId) {
  const isProductAlreadyOrdered = !!order.find((item) => item.id === productId);
  if (isProductAlreadyOrdered) {
    alert("товар уже в корзине");
  } else {
    const foundProduct = products.find((item) => productId === item.id);
    if (foundProduct) {
      order.push(foundProduct);
    }
  }

  renderCart();
  rerenderTotalPrice();
}

function removeFromBasket(productId) {
  const itemToRemoveIndex = order.findIndex((item) => item.id === productId);
  order.splice(itemToRemoveIndex, 1);

  renderCart();
  rerenderTotalPrice();
}

function rerenderTotalPrice() {
  let totalPrice = 0;
  for (const orderItem of order) {
    totalPrice += orderItem.price;
  }

  document.getElementById("total").innerText = totalPrice;
}

function renderCart() {
  const cart = document.getElementById("basket-items");

  cart.innerHTML = "";
  order.forEach((item) => {
    const el = document.createElement("li");
    el.innerText = item.title;
    el.onclick = () => removeFromBasket(item.id);
    cart.appendChild(el);
  });
}
