import { getElement } from "../utils.js";
import display from "../displayProducts.js";

const setupPrice = () => {
  const priceFilter = getElement(".price-filter");
  const priceValue = getElement(".price-value");

  priceFilter.addEventListener("input", (e) => {
    priceValue.textContent = `$${e.target.value}`;
  });
};

export default setupPrice;
