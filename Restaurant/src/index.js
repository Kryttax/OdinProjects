import setUpPage from "./set-up.js";
import loadHome from "./pages/home.js";
import loadMenu from "./pages/menu.js";
import loadContact from "./pages/contact.js";
import "./styles/styles.css";
function assignTab() {
  const homeBtn = document.getElementById("homeTab");
  const menuBtn = document.getElementById("menuTab");
  const contactBtn = document.getElementById("contactTab");

  homeBtn.addEventListener("click", () => changeTab(loadHome));
  menuBtn.addEventListener("click", () => changeTab(loadMenu));
  contactBtn.addEventListener("click", () => changeTab(loadContact));
}

function initPage() {
  setUpPage();
  loadHome();
  assignTab();
}

function changeTab(newTab) {
  console.log("Changing tab: " + newTab);
  const doc = document.getElementById("content");
  const currentPage = doc.querySelector(".main");

  if (currentPage) doc.removeChild(currentPage);

  newTab();
}

initPage();
