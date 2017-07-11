import { GOT_RECIPES_SUCCESS, SAVE_NEW_RECIPE } from './constants';
import { AsyncStorage } from 'react-native'
import store from './configureStore'


export function gotRecipesSuccess(recipes) {
  return {
    type: GOT_RECIPES_SUCCESS,
    recipes
  };
}

export function updateRecipe (key, recipeToUpdate) {
  return dispatch => {
    updatingRecipe(key, recipeToUpdate)
    .then(() => {
      store.dispatch(fetchAllRecipes())
    })
    .catch(console.error)
  }
}

export function fetchAllRecipes() {
  return dispatch => {
    getRecipes()
    .then(recipes => {
      dispatch(gotRecipesSuccess(recipes))
    })
    .catch(console.error)
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
  const allKeys = await AsyncStorage.getAllKeys()
  let foundRecipesObj = await AsyncStorage.multiGet(allKeys)
  let foundRecipesArray = []

  foundRecipesObj.map(recipe => {
    let [key, recipeObj] = recipe
    recipeObj = JSON.parse(recipeObj) //the found recipe comes back as a string
    recipeObj['key'] = Number(key) //converting the string of the recipe key into a number
    foundRecipesArray.push(recipeObj)
  })

  try {
    return foundRecipesArray
  } catch (err) {
    console.log(err)
  }
}

async function savingNewRecipe (newRecipeObj) {
  let newRandomId = new IDGenerator().generate()
  try {
    await AsyncStorage.setItem(newRandomId, JSON.stringify(newRecipeObj))
  } catch (error) {
    console.trace(error)
  }
}

async function updatingRecipe (key, recipeToUpdate) {
  try {
    await AsyncStorage.setItem(key.toString(), JSON.stringify(recipeToUpdate))
  } catch (error) {
    console.trace(error)
  }
}

//this function makes random numbers to use as a storage ID for each recipe
function IDGenerator() {

  this.length = 8;
  this.timestamp = +new Date;

  var _getRandomInt = function( min, max ) {
    return Math.floor( Math.random() * ( max - min + 1 ) ) + min;
  }

  this.generate = function() {
    var ts = this.timestamp.toString();
    var parts = ts.split( "" ).reverse();
    var id = "";

    for( var i = 0; i < this.length; ++i ) {
      var index = _getRandomInt( 0, parts.length - 1 );
      id += parts[index];
    }

    return id;
  }
}
