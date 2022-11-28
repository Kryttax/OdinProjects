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

  const cDiv = document.createElement("div");
  cDiv.classList.add("centerDiv");

  const bar_img = document.createElement("img");
  bar_img.classList.add("img");
  bar_img.src = bar_ic;
  cDiv.appendChild(bar_img);

  const subImg = document.createElement("span");
  subImg.classList.add("legend");
  subImg.textContent = "Choomba St.";
  cDiv.appendChild(subImg);

  element.appendChild(cDiv);

  return element;
};

const loadContact = () => {
  document.getElementById("content").appendChild(contactPage());
};

export default loadContact;
