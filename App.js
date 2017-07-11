import { AppRegistry } from 'react-native';
import { StackNavigator } from 'react-navigation';

import SingleRecipe from './Components/SingleRecipe';
import AllRecipes from './Components/AllRecipes';
import AddRecipe from './Components/AddRecipe';
import AddOrEdit from './Components/AddOrEdit';
import HomeScreen from './Components';

const littleChefRouter = StackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      header: null
    }
   },
  AllRecipes: {
    screen: AllRecipes,
    navigationOptions: {
      header: null
    }
  },
  AddRecipe: {
    screen: AddRecipe,
    navigationOptions: {
      header: null
    }
  },
  SingleRecipe: {
    screen: SingleRecipe,
    navigationOptions: {
      header: null
    }
  },
  AddOrEdit: {
    screen: AddOrEdit,
    navigationOptions: {
      header: null
    }
  }
});

AppRegistry.registerComponent('littleChef', () => littleChefRouter);
