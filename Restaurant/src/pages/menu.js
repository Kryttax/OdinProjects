import drink1_ic from "../assets/icons/davidMartinez.png";
import drink2_ic from "../assets/icons/johnnySilverhand.png";
const createDrink = (name, icon, ingredients) => {
  const drink = document.createElement("span");
  drink.classList.add("drink");
  const ic = document.createElement("img");
  ic.classList.add("img");
  ic.src = icon;
  drink.appendChild(ic);

  const divInfo = document.createElement("div");
  divInfo.classList.add("infoContainer");

  const title = document.createElement("span");
  title.classList.add("info");
  title.textContent = name;
  divInfo.appendChild(title);

  const ingredientsList = document.createElement("ul");


  for (let i = 0; i < ingredients.length; i++) {
    const ingredient = document.createElement("li");
    ingredient.appendChild(document.createTextNode(ingredients[i]));
    ingredientsList.appendChild(ingredient);
  }

  divInfo.appendChild(ingredientsList);
  drink.appendChild(divInfo);

  return drink;
};

const menuPage = () => {
  const element = document.createElement("div");
  element.id = "main";
  element.classList.add("main");

  const title = document.createElement("span");
  title.textContent = "MENU";
  title.classList.add("title");

  const cDiv = document.createElement("div");
  cDiv.classList.add("centerDiv");

  const subtitle = document.createElement("span");
  subtitle.classList.add("subtitle");
  subtitle.textContent = "CHECK OUT THE BEST DRINKS OF NIGHT CITY";
  cDiv.appendChild(subtitle);

  const subtitle2 = document.createElement("span");
  subtitle2.classList.add("subtitle");
  subtitle2.textContent = "V V";
  cDiv.appendChild(subtitle2);

  element.appendChild(title);
  element.appendChild(cDiv);

  const divItems = document.createElement("div");
  divItems.classList.add("itemsContainer");
  cDiv.appendChild(divItems);

  // const drink1 = document.createElement("span");
  // divItems.classList.add("drink");
  // const drink1img = document.createElement("img");
  // drink1img.src = drink1_ic;
  // drink1.appendChild(drink1img);

  // const drink1ing = document.createElement("ul");
  // drink1ing.classList.add("drink");

  const drink1 = createDrink("David Martinez", drink1_ic, ["Acid", "Lemon"]);
  const drink2 = createDrink("Jhonny Silverhand", drink2_ic, ["Acid", "Lemon"]);

  divItems.appendChild(drink1);
  divItems.appendChild(drink2);

  return element;
};

const loadMenu = () => {
  document.getElementById("content").appendChild(menuPage());
};

export default loadMenu;
