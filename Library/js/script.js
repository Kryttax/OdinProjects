const newBookBtn = document.querySelector("#newBookBtn");
// newBookBtn.addEventListener("click", addDummyBook);
newBookBtn.addEventListener("click", () => (formModal.style.display = "block"));

const formModal = document.getElementById("form-container");
const closeForm = document.getElementById("close-form");
closeForm.addEventListener("click", () => (formModal.style.display = "none"));

const addBookBtn = document.querySelector("#addBtn");
addBookBtn.addEventListener("click", addDummyBook);

function validateForm() {
  let name = document.forms["form"]["title"].value;
  if (name == "") {
    alert("Name must be filled out");
    return false;
  }
}

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

  renderLibrary();
}

function renderLibrary() {
  const libContainer = document.getElementById("library-container");
  const books = document.querySelectorAll(".book");
  books.forEach((book) => libContainer.removeChild(book));

  library.forEach((item) => {
    addBookToLibrary(item);
  });
}

let book;
function addDummyBook() {
  event.preventDefault();

  for (const el of document
    .getElementById("form")
    .querySelectorAll("[required]")) {
    if (!el.reportValidity()) {
      return;
    }
  }

  formModal.style.display = "none";

  book = new Book(form.title.value, form.author.value, form.pages.value, false);
  library.push(book);

  addBookToLibrary(book);
}

function addBookToLibrary(item) {
  const libContainer = document.querySelector("#library-container");

  const bookDiv = document.createElement("div");
  const titleDiv = document.createElement("div");
  const authorDiv = document.createElement("div");
  const pagesDiv = document.createElement("div");
  const readDiv = document.createElement("div");
  const closeBtn = document.createElement("span");
  const readStatusBtn = document.createElement("span");

  bookDiv.classList.add("book");
  bookDiv.setAttribute("id", library.indexOf(item));

  closeBtn.classList.add("close");
  closeBtn.textContent = "X";
  closeBtn.addEventListener("click", () =>
    removeBookFromLibrary(library.indexOf(item))
  );
  bookDiv.appendChild(closeBtn);

  titleDiv.textContent = item.title;
  titleDiv.classList.add("title");
  bookDiv.appendChild(titleDiv);

  authorDiv.textContent = item.author;
  authorDiv.classList.add("info");
  bookDiv.appendChild(authorDiv);

  pagesDiv.textContent = item.pages;
  pagesDiv.classList.add("info");
  bookDiv.appendChild(pagesDiv);

  readStatusBtn.classList.add("eye");
  readStatusBtn.textContent = "eye";
  readStatusBtn.addEventListener("click", () => changeReadStatus(item));
  bookDiv.appendChild(readStatusBtn);

  readDiv.textContent = item.read ? "Read" : "Not read";
  readDiv.classList.add("info");
  bookDiv.appendChild(readDiv);

  libContainer.appendChild(bookDiv);
}

function removeBookFromLibrary(index) {
  library.splice(index, 1);
  renderLibrary();
}

function changeReadStatus(item) {
  item.read = !item.read;
  renderLibrary();
}

populateLibrary();
