import { getElement } from "../utils.js";
import display from "../displayProducts.js";

const setupCompanies = (data) => {
  const companies = [
    "all",
    ...new Set(data.map((item) => item.fields.company)),
  ];
  const categories = companies
    .map((category) => {
      return `
    <button class="company-btn">${category}</button>
    `;
    })
    .join("");
  const companiesDOM = getElement(".companies");

  companiesDOM.innerHTML = categories;
};

export default setupCompanies;
