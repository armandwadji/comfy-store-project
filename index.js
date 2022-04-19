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
import addToCartDOM from "./src/cart/addToCartDOM.js";

const featuredCenter = getElement(".featured-center");
window.addEventListener("DOMContentLoaded", async () => {
  const data = await fetchProducts(allProductsUrl);
  const featured = data.filter((item) => item.fields.featured && item);
  const productsFeatured = display(featured);
  featuredCenter.innerHTML = productsFeatured;
  addToCartDOM();
});
