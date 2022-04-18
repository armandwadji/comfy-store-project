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
  let panier = setStorageItem() ? setStorageItem() : [];
  console.log(panier);

  addProducts.forEach((product) => {
    product.addEventListener("click", async (e) => {
      const id = product.dataset.id;
      const data = await fetchProducts(`${singleProductUrl}?id=${id}`);
      const { price } = data.fields;
      const { url: img } = data.fields.image[0];

      panier = [...panier, { id, price, img, amount: 1 }];
      getStorageItem(panier);
    });
  });
};

export default addToCartDOM;
