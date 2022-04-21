// global imports
import "../toggleSidebar.js";
import "../cart/toggleCart.js";
import "../cart/setupCart.js";

// specific
import {
  singleProductUrl,
  getElement,
  formatPrice,
  idrecuparation,
} from "../utils.js";
import fetchProducts from "../fetchProducts.js";
import displayProduct from "../displayProduct.js";
import addToCartDOM from "../cart/addToCartDOM.js";

window.addEventListener("DOMContentLoaded", async () => {
  const singleProduct = getElement(".single-product");
  const id = await idrecuparation();
  const data = await fetchProducts(`${singleProductUrl}?id=${id}`);
  singleProduct.innerHTML = displayProduct(data);
  addToCartDOM();
});
