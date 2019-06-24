import * as Const from './consts';

export default class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    this.view.initializeElements(model.items, model.recipes);

    this.view.on(Const.ADD_ITEM, this.addItem.bind(this));
    this.view.on(Const.ADD_RECIPE, this.addRecipe.bind(this));
  }

  addItem(components) {
    const { result, id } = this.model.craftItem(components);
    if (result) {
      this.view.showItem(this.model.items.length, this.model.recipes[id].name);
    }
  }

  addRecipe({ name, components }) {
    this.model.craftRecipe(name, components);
    this.view.showRecipe(this.model.recipes.length, name);
  }
}
