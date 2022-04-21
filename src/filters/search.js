import { getElement } from "../utils.js";
import display from "../displayProducts.js";
const setupSearch = () => {
  const searchInput = getElement(".search-input");
  searchInput.addEventListener("input", (e) => {
    const value = e.target.value;
  });
};

export default setupSearch;
