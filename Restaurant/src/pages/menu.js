const menuPage = () => {
  const element = document.createElement("div");
  element.id = "main";
  element.classList.add("main");

  const title = document.createElement("span");
  title.textContent = "MENU";
  title.classList.add("title");
  // const subtitle = document.createElement("span");
  // subtitle.classList.add("subtitle");
  // subtitle.textContent = "BEST BAR OF NIGHT CITY";

  element.appendChild(title);
  // element.appendChild(subtitle);
  return element;
};

const loadMenu = () => {
  document.getElementById("content").appendChild(menuPage());
};

export default loadMenu;
