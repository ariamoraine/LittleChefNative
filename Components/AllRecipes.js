import React, { Component } from 'react';
import {
  Text,
  ScrollView,
  View,
  Image,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native';
import { getTheme } from 'react-native-material-kit';
import store from '../configureStore';
import { allRecipes } from '../assets/styles/theme';
const defaultImage = require('../assets/photos/food-1050813_960_720.jpg');


export default class AllRecipes extends Component {

    constructor (props) {
      super(props);
      this.state = store.getState();
    }

    componentDidMount () {
      this.unsubscribe = store.subscribe(() => {
        this.setState(store.getState());
      });
    }

    componentWillUnmount () {
      this.unsubscribe();
    }

  render() {
    let recipes = this.state.recipesReducer.recipes;
    const { navigate } = this.props.navigation;
    const theme = getTheme();

    return (
      <View style={allRecipes.wrapper}>
        {
        recipes.length > 0 ? //checking if there are any saved recipes if true display them
        <ScrollView contentContainerStyle={allRecipes.main}>
          <Text style={allRecipes.headerText}>ALL RECIPES </Text>
          <Text />
          {
            recipes.map((recipe) => {
              const photoSource = recipe.photoUri ? {uri: recipe.photoUri} : defaultImage;
              return (
                <View style={theme.cardStyle} key={recipe.key}>
                <TouchableOpacity onPress={() => navigate('SingleRecipe', {currentRecipe: recipe})}>
                    <Image source={photoSource} style={theme.cardImageStyle}/>
                    <Text style={theme.cardTitleStyle}>{recipe.title}</Text>
                </TouchableOpacity>
                </View>
              );
            })
          }
        </ScrollView>
        : //else if there are no saved recipes show an error message to add some
        <Text style={allRecipes.noRecipeText}>{`You dont have any recipes saved yet. \nAdd one with the button below`}</Text>
          }
        <TouchableHighlight
          style={allRecipes.addRecipeButton}
          onPress={() => navigate('AddOrEditChoice')}
        >
        <Text style={allRecipes.addRecipeText}>ADD / EDIT A RECIPE</Text>
        </TouchableHighlight>
      </View>
    );
  }
}
