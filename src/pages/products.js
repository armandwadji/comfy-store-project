// global imports
import "../toggleSidebar.js";
import "../cart/toggleCart.js";
import "../cart/setupCart.js";

//  filter imports
import setupSearch from "../filters/search.js";
import setupCompanies from "../filters/companies.js";
import setupPrice from "../filters/price.js";

// specific imports
import { data, store } from "../store.js";
import display from "../displayProducts.js";
import { allProductsUrl, getElement } from "../utils.js";
import fetchProducts from "../fetchProducts.js";
import addToCartDOM from "../cart/addToCartDOM.js";

const productsContainer = getElement(".products-container");

window.addEventListener("DOMContentLoaded", async () => {
  const products = display(data);
  productsContainer.innerHTML = products;
  setupCompanies(data);
  setupPrice();
  setupSearch();
  addToCartDOM();
});
