import fetchProducts from "../fetchProducts.js";
import { store } from "../store.js";
import {
  formatPrice,
  getElement,
  getStorageItem,
  setStorageItem,
  singleProductUrl,
} from "../utils.js";
import { openCart } from "./toggleCart.js";

const addToCartDOM = async () => {
  const addProducts = document.querySelectorAll(".product-cart-btn");

  let panier = setStorageItem("panier") ? setStorageItem("panier") : [];
  await showPanier(panier);
  increase(panier);
  decrease(panier);
  removeItem(panier);

  addProducts.forEach((product) => {
    product.addEventListener("click", async (e) => {
      const id = product.dataset.id;
      const data = await fetchProducts(`${singleProductUrl}?id=${id}`);
      const { price, name: title } = data.fields;
      const { url: img } = data.fields.image[0];
      let foundProduct = panier.find((item) => item.id === id);
      if (!foundProduct) {
        panier = [...panier, { id, price, img, title, amount: 1 }];
        openCart();
      } else {
        await panier.map((item) => item.id === id && item.amount++);
        openCart();
      }
      showPanier(panier);
      increase(panier);
      decrease(panier);
      removeItem(panier);
    });
  });
};

export default addToCartDOM;

export const showPanier = async (panier) => {
  getStorageItem("panier", panier);
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

const increase = async (panier) => {
  const increaseBtns = document.querySelectorAll(".cart-item-increase-btn");
  increaseBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const id = e.currentTarget.dataset.id;
      panier.map((item) => item.id === id && item.amount++);

      getStorageItem("panier", panier);
      addToCartDOM();
    });
  });
};

const decrease = async (panier) => {
  const increaseBtns = document.querySelectorAll(".cart-item-decrease-btn");
  increaseBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      let panierDel = [];
      const id = e.currentTarget.dataset.id;
      panier.map((item) => item.id === id && item.amount--);
      panierDel = panier.filter((item) => item.amount !== 0);

      getStorageItem("panier", panierDel);
      addToCartDOM();
    });
  });
};

const removeItem = async (panier) => {
  const removesBtn = document.querySelectorAll(".cart-item-remove-btn");

  removesBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
      let panierDel = [];
      const id = btn.dataset.id;
      panierDel = panier.filter((item) => item.id !== id);
      getStorageItem("panier", panierDel);
      addToCartDOM();
    });
  });
};
