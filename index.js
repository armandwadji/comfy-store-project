// global imports
import "./src/toggleSidebar.js";
import "./src/cart/toggleCart.js";

// specific imports
import fetchProducts from "./src/fetchProducts.js";
import { data, store } from "./src/store.js";
import display from "./src/displayProducts.js";
import { getElement, getStorageItem } from "./src/utils.js";
import { allProductsUrl } from "./src/utils.js";
import addToCartDOM, { showPanier } from "./src/cart/addToCartDOM.js";

/***** EVENEMENTS ******/

window.addEventListener("DOMContentLoaded", async () => {
  getStorageItem("articles", await fetchProducts(allProductsUrl));
  const featureds = data.filter((item) => item.fields.featured && item);
  display(featureds, ".featured-center");
  addToCartDOM();
});
