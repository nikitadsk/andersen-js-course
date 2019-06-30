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

function createItem(id, name, type) {
  const itemName = create('span', {}, name);

  const item = create('li', {
    draggable: 'true',
    'data-id': id,
    'data-type': type,
  });

  item.appendChild(itemName);

  return item;
}

export { create, createItem };
