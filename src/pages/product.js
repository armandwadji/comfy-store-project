// global imports
import "../toggleSidebar.js";
import "../cart/toggleCart.js";
import "../cart/setupCart.js";
// specific
import { addToCart } from "../cart/setupCart.js";
import {
  singleProductUrl,
  getElement,
  formatPrice,
  idrecuparation,
} from "../utils.js";
import fetchProducts from "../fetchProducts.js";
import displayProduct from "../displayProduct.js";
import addToCartDOM from "../cart/addToCartDOM.js";

// selections
// const loading = getElement('.page-loading');
// const centerDOM = getElement('.single-product-center');
// const pageTitleDOM = getElement('.page-hero-title');
// const imgDOM = getElement('.single-product-img');
// const titleDOM = getElement('.single-product-title');
// const companyDOM = getElement('.single-product-company');
// const priceDOM = getElement('.single-product-price');
// const colorsDOM = getElement('.single-product-colors');
// const descDOM = getElement('.single-product-desc');

const singleProduct = getElement(".single-product");

// cart product
// let productID;

// show product when page loads

window.addEventListener("DOMContentLoaded", async () => {
  const id = await idrecuparation();
  const data = await fetchProducts(`${singleProductUrl}?id=${id}`);
  singleProduct.innerHTML = displayProduct(data);
  addToCartDOM();
});
