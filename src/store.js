import { setStorageItem } from "./utils.js";

const data = setStorageItem("articles");
const store = setStorageItem("panier") ? setStorageItem("panier") : [];
const setupStore = () => {};
const findProduct = () => {};
export { data, store, setupStore, findProduct };
