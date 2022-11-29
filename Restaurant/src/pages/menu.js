import drink1_ic from "../assets/icons/davidMartinez.png";
import drink2_ic from "../assets/icons/johnnySilverhand.png";
import drink3_ic from "../assets/icons/jackieWelles.png";
import drink4_ic from "../assets/icons/joeTiels.png";

const createDrink = (name, quote, icon, ingredients) => {
  const drink = document.createElement("span");
  drink.classList.add("drink");

  const imgContainer = document.createElement("span");
  imgContainer.classList.add("imgContainer");
  const ic = document.createElement("img");
  ic.classList.add("img");
  ic.src = icon;
  imgContainer.appendChild(ic);

  const infContainer = document.createElement("span");
  infContainer.classList.add("infoContainer");

  const title = document.createElement("span");
  title.classList.add("info");
  title.textContent = name;
  infContainer.appendChild(title);

  const subtitle = document.createElement("span");
  subtitle.classList.add("quote");
  subtitle.textContent = quote;
  infContainer.appendChild(subtitle);

  const ingContainer = document.createElement("span");
  ingContainer.classList.add("ingrContainer");

  const ingtitle = document.createElement("span");
  ingtitle.classList.add("info");
  ingtitle.textContent = "Ingredients";
  ingContainer.appendChild(ingtitle);

  const ingredientsList = document.createElement("ul");

  for (let i = 0; i < ingredients.length; i++) {
    const ingredient = document.createElement("li");
    ingredient.classList.add("ingredient");
    ingredient.appendChild(document.createTextNode(ingredients[i]));
    ingredientsList.appendChild(ingredient);
  }

  ingContainer.appendChild(ingredientsList);
  drink.appendChild(imgContainer);
  drink.appendChild(infContainer);
  drink.appendChild(ingContainer);

  return drink;
};

const addBanner = () => {
  const banner = document.createElement("div");
  banner.classList.add("banner");
  return banner;
};

const menuPage = () => {
  const element = document.createElement("div");
  element.id = "main";
  element.classList.add("main");

  const title = document.createElement("span");
  title.textContent = "DRINKS";
  title.classList.add("title");

  const cDiv = document.createElement("div");
  cDiv.classList.add("centerDiv");

  const subtitle = document.createElement("span");
  subtitle.classList.add("subtitle");
  subtitle.textContent = "CHECK OUT THE BEST DRINKS OF NIGHT CITY";
  cDiv.appendChild(subtitle);

  const subtitle2 = document.createElement("span");
  subtitle2.classList.add("accent");
  subtitle2.textContent = "/ / /";
  cDiv.appendChild(subtitle2);

  const divItems = document.createElement("div");
  divItems.classList.add("itemsContainer");
  // cDiv.appendChild(divItems);

  const drink1 = createDrink(
    "David Martinez",
    "A shot of vodka on the rocks, topped with NiCola. Aim high and go out with a bang.",
    drink1_ic,
    [
      "30 ml. Nicola Blue Syrup",
      "15 ml. Nicola Classic Syrup",
      "60 ml. Vodka",
      "Few drops of food coloring",
      "90 ml. Club Soda",
      "Twist of lemon",
      "Stir",
      "Ice",
    ]
  );

  const drink2 = createDrink(
    "Jhonny Silverhand",
    "A tequila old fashioned with a splash of beer and a chili garnish. For the rockerboy who never gave up.",
    drink2_ic,
    [
      "60ml. aged tequila",
      "1 barspoon agave nectar",
      "2-3 dashes Angostura bitters",
      "Orange twist",
      "Chili pepper",
      "Splash of Mexican beer (around 30ml.)",
    ]
  );

  const drink3 = createDrink(
    "Jackie Welles",
    "A shot of vodka, lime juice, ginger beer and, most importantly... a splash of love.",
    drink3_ic,
    ["2 oz of vodka", "5.5 ounces of ginger beer", "Orange Juice", "Lime"]
  );
  const drink4 = createDrink(
    "Joe Tiel's Okie Hooch",
    "A taste of Oklahoma.",
    drink4_ic,
    ["40ml. of tequila", "Green tea", "Tabasco"]
  );
  divItems.appendChild(drink1);
  divItems.appendChild(addBanner());
  divItems.appendChild(drink2);
  divItems.appendChild(addBanner());
  divItems.appendChild(drink3);
  divItems.appendChild(addBanner());
  divItems.appendChild(drink4);
  divItems.appendChild(addBanner());

  element.appendChild(title);
  element.appendChild(cDiv);
  element.appendChild(divItems);

  return element;
};

const loadMenu = () => {
  document.getElementById("content").appendChild(menuPage());
};

export default loadMenu;
