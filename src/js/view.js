/* eslint-disable class-methods-use-this */
import EventEmitter from './classes/EventEmitter';
import { createItem } from './helpers';
import * as Const from './consts';

// Я знаю, что вы добрые, не ломайте специально. Если что-то пошло не так - перезагрузитесь

export default class View extends EventEmitter {
  constructor() {
    super();
    this.itemList = document.getElementById(Const.ITEM_LIST);
    this.recipeList = document.getElementById(Const.RECIPE_LIST);
    this.clearButton = document.getElementById(Const.CLEAR_WORKBANCH);
    this.createItemButton = document.getElementById(Const.CREATE_ITEM);
    this.createRecipeButton = document.getElementById(Const.CREATE_RECIPE);

    this.clearButton.addEventListener('click', this.clearWorkbanch, false);
    this.createItemButton.addEventListener('click', this.addItem, false);
    this.createRecipeButton.addEventListener('click', this.addRecipe, false);

    document.addEventListener('dragstart', this.dragStart, false);
    document.addEventListener('dragover', event => event.preventDefault(), false);
    document.addEventListener('drop', this.dragDrop.bind(this), false);
  }

  // Простите за говнокод. Курсачи, сессии, отвратный таймменеджмент.
  // Надеюсь, бить не будете
  clearWorkbanch() {
    const firstCell = document.getElementById(Const.FIRST_CELL);
    const secondCell = document.getElementById(Const.SECOND_CELL);
    const thirdCell = document.getElementById(Const.THIRD_CELL);
    const fourthCell = document.getElementById(Const.FOURTH_CELL);

    if (firstCell.firstChild) {
      firstCell.removeChild(firstCell.firstChild);
    }

    if (secondCell.firstChild) {
      secondCell.removeChild(secondCell.firstChild);
    }

    if (thirdCell.firstChild) {
      thirdCell.removeChild(thirdCell.firstChild);
    }

    if (fourthCell.firstChild) {
      fourthCell.removeChild(fourthCell.firstChild);
    }
  }

  initializeElements(items, recipes) {
    items.forEach((value, index) => {
      this.showItem(index, items[index].name);
    });

    recipes.forEach((value, index) => {
      this.showRecipe(index, recipes[index].name);
    });
  }

  addItem = () => {
    const firstCell = document.getElementById(Const.FIRST_CELL);
    const secondCell = document.getElementById(Const.SECOND_CELL);
    const thirdCell = document.getElementById(Const.THIRD_CELL);
    const fourthCell = document.getElementById(Const.FOURTH_CELL);
    const components = [];

    if (firstCell.firstChild) {
      components.push(firstCell.firstChild.getAttribute('data-id'));
    } else {
      components.push(-1);
    }

    if (secondCell.firstChild) {
      components.push(secondCell.firstChild.getAttribute('data-id'));
    } else {
      components.push(-1);
    }

    if (thirdCell.firstChild) {
      components.push(thirdCell.firstChild.getAttribute('data-id'));
    } else {
      components.push(-1);
    }

    if (fourthCell.firstChild) {
      components.push(fourthCell.firstChild.getAttribute('data-id'));
    } else {
      components.push(-1);
    }
    console.log(components);
    this.emit(Const.ADD_ITEM, components);
  };

  addRecipe = () => {
    const firstCell = document.getElementById(Const.FIRST_CELL);
    const secondCell = document.getElementById(Const.SECOND_CELL);
    const thirdCell = document.getElementById(Const.THIRD_CELL);
    const fourthCell = document.getElementById(Const.FOURTH_CELL);
    const components = [];

    if (firstCell.firstChild) {
      components.push(firstCell.firstChild.getAttribute('data-id'));
    } else {
      components.push(-1);
    }

    if (secondCell.firstChild) {
      components.push(secondCell.firstChild.getAttribute('data-id'));
    } else {
      components.push(-1);
    }

    if (thirdCell.firstChild) {
      components.push(thirdCell.firstChild.getAttribute('data-id'));
    } else {
      components.push(-1);
    }

    if (fourthCell.firstChild) {
      components.push(fourthCell.firstChild.getAttribute('data-id'));
    } else {
      components.push(-1);
    }

    const name = prompt('Введите название рецепта');
    this.emit(Const.ADD_RECIPE, { name, components });
  };

  showItem(index, name) {
    const item = createItem(index, name, 'item');
    this.itemList.appendChild(item);
  }

  showRecipe(index, name) {
    const recipe = createItem(index, name, 'recipe');
    this.recipeList.appendChild(recipe);
  }

  dragStart(event) {
    const id = event.target.getAttribute('data-id');
    const typeItem = event.target.getAttribute('data-type');
    const name = event.target.firstChild.innerHTML;
    event.dataTransfer.setData('itemId', id);
    event.dataTransfer.setData('typeItem', typeItem);
    event.dataTransfer.setData('name', name);
  }

  // простите за дублирование кода
  dragDrop(event) {
    event.preventDefault();

    const firstCell = document.getElementById(Const.FIRST_CELL);
    const secondCell = document.getElementById(Const.SECOND_CELL);
    const thirdCell = document.getElementById(Const.THIRD_CELL);
    const fourthCell = document.getElementById(Const.FOURTH_CELL);

    if (
      event.target === firstCell ||
      event.target === secondCell ||
      event.target === thirdCell ||
      event.target === fourthCell
    ) {
      const itemId = event.dataTransfer.getData('itemId');
      const typeItem = event.dataTransfer.getData('typeItem');
      const name = event.dataTransfer.getData('name');

      if (event.target.firstChild) {
        // eslint-disable-next-line no-param-reassign
        event.target.innerHTML = '';
      }
      event.target.appendChild(createItem(itemId, name, typeItem));
    }
  }
}
