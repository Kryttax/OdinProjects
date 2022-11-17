const newBookBtn = document.querySelector("#newBookBtn");
newBookBtn.addEventListener("click", addDummyBook);

let library = [];

class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
}

function populateLibrary() {
  library.push(new Book("Dune", "Herbert", "524", false));
  library.push(new Book("Lastima", "Ebron", "24", false));
  library.push(new Book("Kika", "Superb", "100", true));
  library.forEach((item) => {
    addBookToLibrary(item);
  });
}
let book;
function addDummyBook() {
  book = new Book("Dune", "Herbert", "524", false);
  library.push(book);
  addBookToLibrary(book);
}

function addBookToLibrary(item) {
  const libContainer = document.querySelector("#library-container");

  const bookDiv = document.createElement("div");
  const titleDiv = document.createElement("div");
  const authorDiv = document.createElement("div");
  const pagesDiv = document.createElement("div");

  bookDiv.classList.add("book");
  bookDiv.setAttribute("id", library.indexOf(item));

  titleDiv.textContent = item.title;
  titleDiv.classList.add("title");
  bookDiv.appendChild(titleDiv);

  authorDiv.textContent = item.author;
  authorDiv.classList.add("info");
  bookDiv.appendChild(authorDiv);

  pagesDiv.textContent = item.pages;
  pagesDiv.classList.add("info");
  bookDiv.appendChild(pagesDiv);

  libContainer.appendChild(bookDiv);
}

populateLibrary();
