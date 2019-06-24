import Item from './classes/Item';
import Recipe from './classes/Recipe';

function getDefaultItems() {
  const defaultItems = [
    new Item('Предмет 1'),
    new Item('Предмет 2'),
    new Item('Предмет 3'),
    new Item('Предмет 4'),
  ];

  return defaultItems;
}

function getDefaultRecipes() {
  const defaultRecipes = [
    new Recipe('Предмет 5', [0, 1, 2, -1]),
    new Recipe('Предмет 6', [1, 3, -1, -1]),
    new Recipe('Предмет 7', [0, 2, -1, -1]),
    new Recipe('Предмет 8', [1, 2, 3, -1]),
  ];

  return defaultRecipes;
}

export { getDefaultItems, getDefaultRecipes };
