import { AppRegistry } from 'react-native';
import { StackNavigator } from 'react-navigation';

import SingleRecipe from './Components/SingleRecipe';
import AllRecipes from './Components/AllRecipes';
import AddEditRecipe from './Components/AddEditRecipe';
import AddOrEditChoice from './Components/AddOrEditChoice';
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
  AddEditRecipe: {
    screen: AddEditRecipe,
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
  AddOrEditChoice: {
    screen: AddOrEditChoice,
    navigationOptions: {
      header: null
    }
  }
});

AppRegistry.registerComponent('littleChef', () => littleChefRouter);
