import bar_ic from "../assets/icons/bar.jpg";

const contactPage = () => {
  const element = document.createElement("div");
  element.id = "main";
  element.classList.add("main");

  const divTitle = document.createElement("div");
  divTitle.classList.add("divIcon");

  const subtitle = document.createElement("span");
  subtitle.classList.add("subtitle");
  subtitle.textContent = "FIND US HERE > >";
  divTitle.appendChild(subtitle);

  const location_ic = document.createElement("span");
  location_ic.classList.add("icon");
  divTitle.appendChild(location_ic);

  element.appendChild(divTitle);

  const bar_img = document.createElement("img");
  bar_img.src = bar_ic;

  const subImg = document.createElement("span");
  subImg.classList.add("subtitle");
  subImg.textContent = "Choomba St.";

  element.appendChild(bar_img);

  return element;
};

const loadContact = () => {
  document.getElementById("content").appendChild(contactPage());
};

export default loadContact;
