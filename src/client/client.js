import '../styles/main.css';
import createBook from './helpers/helpers';
import * as CONST from '../consts';

require('babel-polyfill');

const bookList = document.getElementById('books');
const nameInput = document.getElementById('name');
const authorInput = document.getElementById('author');
const addButton = document.getElementById('add-button');

async function newBook() {
  const name = nameInput.value;
  const author = authorInput.value;

  const book = createBook(name, author);
  bookList.appendChild(book);

  const bodyToServer = JSON.stringify({
    name,
    author,
  });

  await fetch(`${CONST.URL}:${CONST.SERVER_PORT}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: bodyToServer,
  });
}

addButton.addEventListener('click', newBook);

(async function loadBooks() {
  const resp = await fetch(`${CONST.URL}:${CONST.SERVER_PORT}`);
  const books = await resp.json();
  books.forEach(({ name, author }) => bookList.appendChild(createBook(name, author)));
})();
