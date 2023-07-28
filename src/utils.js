//   ATTENTION!!!!!!!!!!!
//   I SWITCHED TO PERMANENT DOMAIN
//   DATA IS THE SAME JUST A DIFFERENT URL,
//   DOES NOT AFFECT PROJECT FUNCTIONALITY

const allProductsUrl = "https://course-api.com/react-store-products";
const singleProductUrl = "https://course-api.com/javascript-store-single-product";

const getElement = (selection) => {
  const element = document.querySelector(selection);
  if (element) return element;
  throw new Error(
    `Please check "${selection}" selector, no such element exist`
  );
};

//fonction qui récupère l'id de lélément cliqué
const idrecuparation = async () => {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  return id;
};

const formatPrice = (price) => new Intl.NumberFormat( "en-US", { style: "currency", currency: "USD" } ).format( ( price / 100 ).toFixed( 2 ) );


const getStorageItem = async (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};
const setStorageItem = (value) => {
  return JSON.parse(localStorage.getItem(value));
};

export {
  allProductsUrl,
  singleProductUrl,
  getElement,
  idrecuparation,
  formatPrice,
  getStorageItem,
  setStorageItem,
};
