const createButton = (buttonText) => {
  const element = document.createElement("span");
  element.classList.add("tab");
  element.textContent = buttonText;
  return element;
};

const createSection = () => {
  const element = document.createElement("div");
  element.classList.add("section");
  return element;
};

const footer = () => {
  const tabsDiv = createSection();
  tabsDiv.id = "footer";

  const container = createSection();
  container.id = "footContainer";

  const homeBtn = createButton("Home");
  homeBtn.id = "homeTab";
  const menuBtn = createButton("Menu");
  menuBtn.id = "menuTab";
  const contactBtn = createButton("Contact");
  contactBtn.id = "contactTab";

  container.appendChild(homeBtn);
  container.appendChild(menuBtn);
  container.appendChild(contactBtn);

  tabsDiv.appendChild(container);

  document.querySelector("#content").appendChild(tabsDiv);
  return tabsDiv;
};

export default footer;
