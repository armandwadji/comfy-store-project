import { formatPrice, getElement } from "../utils.js";

const setupPrice = () => {
  const priceFilter = getElement(".price-filter");
  const priceValue = getElement(".price-value");

  priceFilter.addEventListener("input", (e) => {
    const price = e.target.value;
    priceValue.textContent = `${formatPrice(price)}`;
  });
};

export default setupPrice;
