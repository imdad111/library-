const myLibrary = [];

function Book(id, title, author, pages, readStatus) {
    if (!new.target) {
        throw Error("You forgot to use 'new' when creating a book");
    }

    this.id = id;
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readStatus = readStatus;
}

Book.prototype.toggleRead = function () {
    this.readStatus = !this.readStatus;
};

function addBookToLibrary(title, author, pages, status) {
    const id = crypto.randomUUID();
    const book = new Book(id, title, author, pages, status);
    myLibrary.push(book);
}

function removeBook(id) {
    const index = myLibrary.findIndex(book => book.id === id);
    if (index !== -1) myLibrary.splice(index, 1);
}

/* ---------- DOM ---------- */
const content = document.querySelector(".content");
const addBtn = document.querySelector("#add-btn");
const dialog = document.querySelector("#book-dialog");
const form = document.querySelector("#book-form");
const cancelBtn = document.querySelector("#cancel-btn");

function displayBooks() {
    content.innerHTML = "";

    myLibrary.forEach(book => {
        const card = document.createElement("article");
        card.classList.add("card");
        if (book.readStatus) card.classList.add("read");
        card.dataset.id = book.id;

        const title = document.createElement("h2");
        title.classList.add("card-title");
        title.textContent = book.title;

        const author = document.createElement("p");
        author.classList.add("card-author");
        author.textContent = `by ${book.author}`;

        const pages = document.createElement("p");
        pages.classList.add("card-pages");
        pages.textContent = `${book.pages} pages`;

        const actions = document.createElement("div");
        actions.classList.add("card-actions");

        const readBtn = document.createElement("button");
        readBtn.classList.add("read-btn");
        readBtn.textContent = book.readStatus ? "✓ Read" : "Not read";
        readBtn.addEventListener("click", () => {
            book.toggleRead();
            displayBooks();
        });

        const removeBtn = document.createElement("button");
        removeBtn.classList.add("remove-btn");
        removeBtn.textContent = "Remove";
        removeBtn.addEventListener("click", () => {
            removeBook(book.id);
            displayBooks();
        });

        actions.append(readBtn, removeBtn);
        card.append(title, author, pages, actions);
        content.appendChild(card);
    });
}

/* ---------- Events ---------- */
addBtn.addEventListener("click", () => dialog.showModal());

cancelBtn.addEventListener("click", () => {
    form.reset();
    dialog.close();
});

form.addEventListener("submit", event => {
    event.preventDefault();

    const data = new FormData(form);
    addBookToLibrary(
        data.get("title").trim(),
        data.get("author").trim(),
        Number(data.get("pages")),
        data.get("readStatus") === "on"
    );

    displayBooks();
    form.reset();
    dialog.close();
});