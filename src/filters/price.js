import { getElement } from "../utils.js";
import display from "../displayProducts.js";

const setupPrice = () => {
  const priceFilter = getElement(".price-filter");
  const priceValue = getElement(".price-value");

  priceFilter.addEventListener("input", (e) => {
    const price = e.target.value;
    priceValue.textContent = `$${price}`;
  });
};

export default setupPrice;
