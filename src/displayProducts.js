import { formatPrice, getElement } from "./utils.js";
import { addToCart } from "./cart/setupCart.js";
const display = (data) => {
  const productsContainer = getElement(".products-container");
  const products = data
    .map((product) => {
      const { id } = product;
      const { name: title, price, company: category } = product.fields;
      const { url } = product.fields.image[0];

      return `
        <article class="product">
            <div class="product-container">
            <img src=${url} alt="image of ${title}" class="product-img img" />
            <div class="product-icons">
                <a href="./product.html?id=${id}" class="product-icon">
                    <i class="fas fa-search"></i>
                </a>
                <button class="product-cart-btn product-icon" data-id=${id}>
                    <i class="fas fa-shopping-cart"></i>
                </button>
            </div>
            </div>
            <footer>
            <p class="product-name">${title}</p>
            <h4 class="product-price">$${price}</h4>
            </footer>
        </article>
    
    `;
    })
    .join("");

  productsContainer.innerHTML = products;
};

export default display;
