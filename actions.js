import { GOT_RECIPES_SUCCESS } from './constants';
import { AsyncStorage } from 'react-native'

export function gotRecipesSuccess(recipes) {
  return {
    type: GOT_RECIPES_SUCCESS,
    recipes
  };
}

export function fetchAllRecipes() {
  return (dispatch) => {
    getRecipes()
      .then((recipes) => {
        dispatch(gotRecipesSuccess(recipes))
      })
      .catch((err) => console.log('err:', err))
  }
}

async function getRecipes () {
  const foundRecipes = await AsyncStorage.getItem('recipes');
  try {
    return foundRecipes
  } catch (err) {
    console.log(err)
  }
}
