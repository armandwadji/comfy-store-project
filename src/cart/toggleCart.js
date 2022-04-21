import { getElement } from "../utils.js";

const cartOpen = getElement(".toggle-cart");
const cartClose = getElement(".cart-close");
const cartOverlay = getElement(".cart-overlay");

export const openCart = () => {
  setTimeout(() => {
    cartOverlay.classList.add("show");
  }, 200);
};

cartOpen.addEventListener("click", () => {
  cartOverlay.classList.add("show");
});

cartClose.addEventListener("click", () => {
  cartOverlay.classList.remove("show");
});
