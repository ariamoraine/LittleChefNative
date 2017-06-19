import { FETCHING_RECIPES } from './constants';

export function getRecipes() {
  return {
    type: FETCHING_RECIPES
  };
}
