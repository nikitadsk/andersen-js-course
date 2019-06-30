import Item from './classes/Item';
import Recipe from './classes/Recipe';

class Model {
  constructor(defaultItems, defaultRecipes) {
    this.items = defaultItems;
    this.recipes = defaultRecipes;
  }

  craftItem(component) {
    const newArrayComponents = [...component];
    newArrayComponents.sort();

    // eslint-disable-next-line consistent-return
    let i = -1;
    const res = this.recipes.some((value, idR) => {
      console.log(value.components);
      const recipeComponents = [...value.components];
      recipeComponents.sort();

      const isSuccess = recipeComponents.every(
        (v, index) => Number(v) === Number(newArrayComponents[index])
      );

      if (isSuccess) {
        i = idR;
        this.items.push(new Item(this.recipes[idR].name));
        return true;
      }
      return false;
    });

    return { result: res, id: i };
  }

  craftRecipe(name, components) {
    this.recipes.push(new Recipe(name, components));
  }
}

export default Model;
