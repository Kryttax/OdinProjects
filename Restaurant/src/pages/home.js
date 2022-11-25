const homePage = () => {
  const element = document.createElement("div");
  element.id = "main";
  element.classList.add("main");

  const title = document.createElement("span");
  title.textContent = "RYDEXX";
  title.classList.add("title");
  const subtitle = document.createElement("span");
  subtitle.classList.add("subtitle");
  subtitle.textContent = "BEST BAR OF NIGHT CITY";

  element.appendChild(title);
  element.appendChild(subtitle);
  return element;
};

const loadHome = () => {
  document.getElementById("content").appendChild(homePage());
};

export default loadHome;
