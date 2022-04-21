const displayProduct = (data) => {
  const { id } = data;
  const {
    name: title,
    price,
    company: category,
    description,
    colors,
  } = data.fields;
  const { url } = data.fields.image[0];

  const colorsSpan = colors
    .map((color) => {
      return `<span class = "product-color" style = " background: ${color}"></span>`;
    })
    .join("");

  return ` <div class="section-center single-product-center">
                <img
                src=${url}
                class="single-product-img img"
                alt="photo de ${title}"
                />
                <article class="single-product-info">
                <div>
                    <h2 class="single-product-title">${title}</h2>
                    <p class="single-product-company text-slanted">${category}</p>
                    <p class="single-product-price">$${price}</p>
                    <div class="single-product-colors">
                        ${colorsSpan}
                    </div>
                    <p class="single-product-desc">
                    ${description}
                    </p>
                    <button class="addToCartBtn btn product-cart-btn" data-id=${id}>add to cart</button>
                </div>
                </article>
            </div>  
         `;
};

export default displayProduct;
