import { GOT_RECIPES_SUCCESS } from '../constants';

const initialState = {
  recipes: [] //recipes will be an array of recipe objects
};

export default function dataReducer (state = initialState, action) {
  let newState = Object.assign({}, state);
  console.log("PREV STATE", state)

  switch (action.type) {
    case GOT_RECIPES_SUCCESS:
      newState.recipes = [...action.recipes];
      break;

    default:
      return state;

  }
  console.log("NEW STATE", newState);
  return newState;
}
