import { GOT_RECIPES_SUCCESS } from './constants';
import { AsyncStorage } from 'react-native'

export function gotRecipesSuccess(recipes) {
  return {
    type: GOT_RECIPES_SUCCESS,
    recipes
  };
}

export function fetchAllRecipes() {
  return dispatch => {
    getRecipes()
    .then(recipes => {
      dispatch(gotRecipesSuccess(recipes))
    })
  }
}

async function getRecipes () {
  const foundRecipes = await AsyncStorage.getItem('recipes');
  try {
    return JSON.parse(foundRecipes)
  } catch (err) {
    console.log(err)
  }
}
