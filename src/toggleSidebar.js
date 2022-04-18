import { getElement } from "./utils.js";

const sidebarOpen = getElement(".toggle-nav");
const sidebarClose = getElement(".sidebar-close");
const sidebar = getElement(".sidebar-overlay");

sidebarOpen.addEventListener("click", () => {
  sidebar.classList.add("show");
});

sidebarClose.addEventListener("click", () => {
  sidebar.classList.remove("show");
});
