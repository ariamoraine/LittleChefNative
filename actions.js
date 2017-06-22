import { GOT_RECIPES_SUCCESS, SAVE_NEW_RECIPE } from './constants';
import { AsyncStorage } from 'react-native'
import store from './configureStore'

export function gotRecipesSuccess(recipes) {
  console.log('inside got Recipes success')
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

export function saveNewRecipe (newRecipeObj) {
  return dispatch => {
    savingNewRecipe(newRecipeObj)
    .then(() => {
      store.dispatch(fetchAllRecipes())
    })
    .catch(console.error)
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

async function savingNewRecipe (newRecipeObj) {
  try {
    await AsyncStorage.setItem('recipes', JSON.stringify(newRecipeObj))
  } catch (error) {
    console.trace(error)
  }
}
