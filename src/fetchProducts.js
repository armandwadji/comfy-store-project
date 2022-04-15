import { allProductsUrl } from "./utils.js";

const fetchProducts = async () => {
  try {
    const response = await fetch(allProductsUrl);
    const data = await response.json();
    return data;
  } catch (error) {
    document.body.innerHTML = `<h1 class="filter-error">error loading...</h1>`;
  }
};

export default fetchProducts;
