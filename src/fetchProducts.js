import { getStorageItem } from "./utils.js";

const fetchProducts = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    document.body.innerHTML = `<h1 class="filter-error">error loading...</h1>`;
  }
};

export default fetchProducts;
