import fetchProducts from "../fetchProducts.js";
import {
  formatPrice,
  getElement,
  getStorageItem,
  setStorageItem,
  singleProductUrl,
} from "../utils.js";
import { openCart } from "./toggleCart.js";

const addToCartDOM = () => {
  const addProducts = document.querySelectorAll(".product-cart-btn");

  let panier = setStorageItem("panier") ? setStorageItem("panier") : [];

  addProducts.forEach((product) => {
    product.addEventListener("click", async (e) => {
      const id = product.dataset.id;
      const data = await fetchProducts(`${singleProductUrl}?id=${id}`);
      const { price, name: title } = data.fields;
      const { url: img } = data.fields.image[0];
      let foundProduct = panier.find((item) => item.id === id);
      if (!foundProduct) {
        panier = [...panier, { id, price, img, title, amount: 1 }];
        getStorageItem("panier", panier);
      } else {
        panier.map((item) => item.id === id && item.amount++);
        getStorageItem("panier", panier);
      }
      showPanier(panier);
      openCart();
    });
  });
  showPanier(panier);
  // increase(panier);
};

export default addToCartDOM;

export const showPanier = (panier) => {
  const cartItems = getElement(".cart-items");
  cartItems.innerHTML = panier
    .map(({ id, price, img, title, amount }) => {
      return `
  <article class="cart-item" data-id=${id}>
    <img src=${img} alt="photo de ${title}" class="cart-item-img" />
    <div>
      <h4 class="cart-item-name">${title}</h4>
      <p class="cart-item-price">$${price}</p>
      <button class="cart-item-remove-btn" data-id=${id}>remove</button>
    </div>

    <div>
      <button class="cart-item-increase-btn" data-id=${id}>
        <i class="fas fa-chevron-up"></i>
      </button>
      <p class="cart-item-amount" data-id="id">${amount}</p>
      <button class="cart-item-decrease-btn" data-id=${id}>
        <i class="fas fa-chevron-down"></i>
      </button>
    </div>
  </article>
    `;
    })
    .join("");

  const quantity = getElement(".cart-item-count");
  const quantities = panier.reduce((acc, val) => acc + val.amount, 0);
  quantity.textContent = quantities;

  const totalDOM = getElement(".cart-total");
  const total = panier.reduce((acc, val) => acc + val.amount * val.price, 0);

  totalDOM.textContent = `total : $${total}`;
};

// const increase = (panier) => {
//   const increaseBtns = document.querySelectorAll(".cart-item-increase-btn");
//   increaseBtns.forEach((btn) => {
//     btn.addEventListener("click", (e) => {
//       const id = e.currentTarget.dataset.id;
//       console.log(e.currentTarget.dataset.id);
//       panier.map((item) => item.id === id && item.amount++);
//       showPanier(panier);
//     });
//   });
// };

const increaseBtns = document.querySelectorAll(".cart-item-increase-btn");
increaseBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const id = e.currentTarget.dataset.id;
    console.log(e.currentTarget.dataset.id);
    panier.map((item) => item.id === id && item.amount++);
    showPanier(panier);
  });
});
const decrease = () => {};
