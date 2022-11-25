const newBookBtn = document.querySelector("#newBookBtn");
// newBookBtn.addEventListener("click", addDummyBook);
newBookBtn.addEventListener("click", () => (formModal.style.display = "block"));

const formModal = document.getElementById("form-container");
const closeForm = document.getElementById("close-form");
closeForm.addEventListener("click", () => (formModal.style.display = "none"));

const addBookBtn = document.querySelector("#addBtn");

function validateForm() {
  let name = document.forms["form"]["title"].value;
  if (name == "") {
    alert("Name must be filled out");
    return false;
  }
}

class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
}

class Library {
  constructor() {
    this.libraryArray = [];
  }

  populateLibrary() {
    this.libraryArray.push(new Book("Dune", "Herbert", "524", false));
    this.libraryArray.push(new Book("Lastima", "Ebron", "24", false));
    this.libraryArray.push(new Book("Kika", "Superb", "100", true));

    this.renderLibrary();
  }

  renderLibrary() {
    const libContainer = document.getElementById("library-container");
    const books = document.querySelectorAll(".book");
    books.forEach((book) => libContainer.removeChild(book));

    this.libraryArray.forEach((item) => {
      this.addBookToLibrary(item);
    });
  }

  addDummyBook() {
    event.preventDefault();

    for (const el of document
      .getElementById("form")
      .querySelectorAll("[required]")) {
      if (!el.reportValidity()) {
        return;
      }
    }

    formModal.style.display = "none";

    let book = new Book(
      form.title.value,
      form.author.value,
      form.pages.value,
      false
    );
    this.libraryArray.push(book);

    this.addBookToLibrary(book);
  }

  addBookToLibrary(item) {
    const libContainer = document.querySelector("#library-container");

    const bookDiv = document.createElement("div");
    const titleDiv = document.createElement("div");
    const authorDiv = document.createElement("div");
    const pagesDiv = document.createElement("div");
    const readDiv = document.createElement("div");
    const closeBtn = document.createElement("span");
    const readStatusBtn = document.createElement("span");

    bookDiv.classList.add("book");
    bookDiv.setAttribute("id", this.libraryArray.indexOf(item));

    closeBtn.classList.add("close");
    closeBtn.textContent = "X";
    closeBtn.addEventListener("click", () =>
      this.removeBookFromLibrary(this.libraryArray.indexOf(item))
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
    readStatusBtn.addEventListener("click", () => this.changeReadStatus(item));
    bookDiv.appendChild(readStatusBtn);

    readDiv.textContent = item.read ? "Read" : "Not read";
    readDiv.classList.add("info");
    bookDiv.appendChild(readDiv);

    libContainer.appendChild(bookDiv);
  }

  removeBookFromLibrary(index) {
    this.libraryArray.splice(index, 1);
    this.renderLibrary();
  }

  changeReadStatus(item) {
    item.read = !item.read;
    this.renderLibrary();
  }
}

let library = new Library();
library.populateLibrary();

addBookBtn.addEventListener("click", () => library.addDummyBook());
