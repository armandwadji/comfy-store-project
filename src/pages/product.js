// global imports
import "../toggleSidebar.js";
import "../cart/toggleCart.js";

// specific
import { singleProductUrl, getElement, idrecuparation } from "../utils.js";
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
