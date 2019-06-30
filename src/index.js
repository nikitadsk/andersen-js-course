/* eslint-disable no-unused-vars */
import './styles/main.css';

import { getDefaultItems, getDefaultRecipes } from './js/default';
import Controller from './js/controller';
import Model from './js/model';
import View from './js/view';

const model = new Model(getDefaultItems(), getDefaultRecipes());
const view = new View();
const controller = new Controller(model, view);
