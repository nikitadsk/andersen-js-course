/* eslint-disable no-param-reassign */
function create(tagName, attrs, content) {
  const el = document.createElement(tagName);
  if (attrs) {
    Object.getOwnPropertyNames(attrs).forEach(n => {
      el.setAttribute(n, attrs[n]);
    });
  }
  if (content) el.innerHTML = content;
  return el;
}

function createBook(name, author) {
  const nameLabel = create('label', { class: 'book-name' }, `${name} | `);
  const authorLabel = create('label', { class: 'book-author' }, `${author} | `);

  const book = create('li', { class: 'book' });

  book.appendChild(nameLabel);
  book.appendChild(authorLabel);

  return book;
}

export default createBook;
