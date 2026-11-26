# 📚 Library

A simple book library app built with vanilla HTML, CSS and JavaScript. Add books through a form, see them as cards, mark them as read, and remove them when you're done.

## Features

- Add a new book with title, author, number of pages and read status
- Form opens in a modal dialog and validates required fields
- Books are displayed as responsive cards in a grid
- Toggle each book between **Read** and **Not read**
- Remove books from the library
- Friendly empty state when there are no books
- Responsive layout with hover effects and a small pop-in animation

## Tech Stack

- HTML5 (`<dialog>` element for the form)
- CSS3 (Grid, Flexbox, CSS variables)
- JavaScript (constructor functions, prototypes, DOM manipulation)

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/library.git
   cd library
   ```
2. Open the project through a local server, for example with the VS Code **Live Server** extension, or:
   ```bash
   npx serve
   ```
3. Visit the address shown in the terminal (usually `http://localhost:3000`).

> The app uses `crypto.randomUUID()`, which some browsers only allow on `localhost` or HTTPS, so opening `index.html` directly with `file://` may not work.

## Project Structure

```
library/
├── index.html   # Page structure and the add-book dialog form
├── style.css    # Layout, card and form styling
├── app.js       # Library logic and DOM handling
└── README.md
```

## How It Works

| Part | Description |
| --- | --- |
| `Book` | Constructor that creates a book object with `id`, `title`, `author`, `pages` and `readStatus` |
| `Book.prototype.toggleRead` | Flips a book's read status. Shared by all books |
| `addBookToLibrary()` | Creates a book with a unique id and pushes it into `myLibrary` |
| `removeBook(id)` | Removes the book with the matching id from `myLibrary` |
| `displayBooks()` | Clears the page and rebuilds a card for every book in `myLibrary` |

**Flow:** click **+ Add Book** → fill in the form → click **Add** → the book is saved in `myLibrary` → `displayBooks()` redraws the cards.

## What I Learned

- Creating objects with constructor functions and sharing methods through prototypes
- Building and updating the DOM with JavaScript
- Handling events and reading form data with `FormData`
- Using the `<dialog>` element for modals
- Building responsive layouts with CSS Grid

## Possible Improvements

- Save books with `localStorage` so they persist after a refresh
- Add edit functionality for existing books
- Add search and filter by read status
- Show a counter of total, read and unread books

## License

This project is open source and available under the [MIT License](LICENSE).
