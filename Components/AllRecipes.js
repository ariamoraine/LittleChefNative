import React, { Component } from 'react';
import {
  Text,
  View,
  Button,
} from 'react-native';
import store from '../configureStore';

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
    console.log(recipes)
    const { navigate } = this.props.navigation;

    return (
      <View>
        <Text>All your recipes</Text>
        <Text>{`Recipe Count: ${recipes.length}`}</Text>
        {
          //break this out into a recipe component
          recipes.map((recipe, index) => {
            return (
              <View key={index}>
                <Text>{`Title: ${recipe.title}`}</Text>
                <Text>Ingredients: </Text>
                {recipe.allIngredients.map((ingredient, idx) => {
                  return <Text key={idx + index}>{`${ingredient}`}</Text>
                })}
              </View>
            );
          })
        }
        <Button
          onPress={() => navigate('AddRecipe')}
          title="Add a new Recipe?"
        />
        {/*// <Button
        //   onPress={() => navigate('CameraPage')}
        //   title="Camera Page"
        // />*/}
      </View>
    );
  }
}
