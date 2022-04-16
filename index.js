// global imports
import "./src/toggleSidebar.js";
import "./src/cart/toggleCart.js";
import "./src/cart/setupCart.js";
// specific imports
import fetchProducts from "./src/fetchProducts.js";
import { setupStore, store } from "./src/store.js";
import display from "./src/displayProducts.js";
import { getElement } from "./src/utils.js";
import { allProductsUrl } from "./src/utils.js";

const featuredCenter = getElement(".featured-center");
window.addEventListener("DOMContentLoaded", async () => {
  const data = await fetchProducts(allProductsUrl);
  data.length = 3;
  const productsFeatured = display(data);
  featuredCenter.innerHTML = productsFeatured;
});
