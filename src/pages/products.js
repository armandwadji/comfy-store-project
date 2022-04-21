// global imports
import "../toggleSidebar.js";
import "../cart/toggleCart.js";
import "../cart/setupCart.js";

//  filter imports
import setupSearch from "../filters/search.js";
import setupCompanies from "../filters/companies.js";
import setupPrice from "../filters/price.js";

// specific imports
import { data, store } from "../store.js";
import display from "../displayProducts.js";
import { allProductsUrl, getElement } from "../utils.js";
import fetchProducts from "../fetchProducts.js";
import addToCartDOM from "../cart/addToCartDOM.js";

/*******ON pointe sur les balises nécéssaires********/
const productsContainer = getElement(".products-container");
const searchInput = document.querySelector(".search-input");
const rangeInput = document.querySelector(".price-filter");
const priceValue = getElement(".price-value");
const companies = document.querySelector(".companies");

/********** On cree les variables nécéssaires **********/
let productsFilter = new Array();
let searchvalue = "";
let categoryvalue = "";
let rangevalue = rangeInput.value;
priceValue.textContent = `$${rangevalue}`;

/********** LES EVENEMENTS *************/
searchInput.addEventListener("input", (e) => {
  searchvalue = e.target.value;
  searchFilter(searchvalue);
  addToCartDOM();
});

rangeInput.addEventListener("input", (e) => {
  rangevalue = e.target.value;
  rangeFilter();
  addToCartDOM();
});

companies.addEventListener("click", (e) => {
  categoryvalue = e.target.textContent;
  e.target.classList.contains("company-btn") && categorieFilter(categoryvalue);
  addToCartDOM();
});

/************* FUNCTIONS ***************/

//fonctions pour filtrer la recherche
const searchFilter = () => {
  updatefilter();
  display(productsFilter);
};

//fonctions pour filtrer la catégorie
const categorieFilter = (value) => {
  if (value === "all") {
    productsFilter = data;
    categoryvalue = "";
    display(productsFilter);
  } else {
    updatefilter();
    display(productsFilter);
  }
};
//fonctions pour filtrer le prix
const rangeFilter = () => {
  updatefilter();
  display(productsFilter);
};

const updatefilter = () => {
  productsFilter = data
    .filter((product) => {
      const { price } = product.fields;
      if (rangevalue && price <= rangevalue) {
        return product;
      }
    })
    .filter((product) => {
      const { company: category } = product.fields;
      if (categoryvalue) {
        if (category === categoryvalue) {
          return product;
        }
      } else {
        return product;
      }
    })
    .filter((product) => {
      const { name: title } = product.fields;
      if (searchvalue && title.includes(searchvalue.toLowerCase())) {
        return product;
      } else if (!searchvalue) {
        return product;
      }
    });
};

window.addEventListener("DOMContentLoaded", async () => {
  setupCompanies(data);
  display(data);
  setupSearch();
  setupPrice();
  updatefilter();
  addToCartDOM();
});
