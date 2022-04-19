import fetchProducts from "../fetchProducts.js";
import {
  formatPrice,
  getElement,
  getStorageItem,
  setStorageItem,
  singleProductUrl,
} from "../utils.js";

const addToCartDOM = () => {
  const addProducts = document.querySelectorAll(".product-cart-btn");
  const quantity = getElement(".cart-item-count");
  let panier = setStorageItem() ? setStorageItem() : [];

  addProducts.forEach((product) => {
    product.addEventListener("click", async (e) => {
      const id = product.dataset.id;
      const data = await fetchProducts(`${singleProductUrl}?id=${id}`);
      const { price } = data.fields;
      const { url: img } = data.fields.image[0];
      let foundProduct = panier.find((item) => item.id === id);
      if (!foundProduct) {
        panier = [...panier, { id, price, img, amount: 1 }];
        getStorageItem(panier);
      } else {
        panier.map((item) => item.id === id && item.amount++);
        getStorageItem(panier);
      }
    });
  });
  const quantities = panier.reduce((acc, val) => acc + val.amount, 0);
  quantity.textContent = quantities;
};

export default addToCartDOM;
