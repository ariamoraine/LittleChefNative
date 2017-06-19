import { FETCHING_RECIPES} from '../constants';

const initialState = {
  recipes: [] //recipes will be an array of recipe objects
};

export default function dataReducer (state = initialState, action) {
  switch (action.type) {
    case FETCHING_RECIPES:
      return {
        recipes: [...state.recipes, action.data]
      };
    default:
      return state;
  }
}
