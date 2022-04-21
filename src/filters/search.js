import { getElement } from "../utils.js";

const setupSearch = () => {
  const searchInput = getElement(".search-input");
  searchInput.addEventListener("input", (e) => {
    const value = e.target.value;
  });
};

export default setupSearch;
