import React, { Component } from 'react';
import {
  Text,
  ScrollView,
  View,
  Button,
  Image,
  Dimensions,
  TouchableHighlight,
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
    const { navigate } = this.props.navigation;

    return (
      <ScrollView>
        <Text>These are all your recipes</Text>
        <Text>{`Recipe Count: ${recipes.length}`}</Text>
        {
          //break this out into a recipe component
          recipes.map((recipe, index) => {
            return (
              <TouchableHighlight onPress={() => navigate('SingleRecipe', {currentRecipe: recipe})} key={index}>
                <View>
                  <Text>{`Title: ${recipe.title}`}</Text>
                  <Text>Ingredients: </Text>
                  {recipe.allIngredients.map((ingredient, idx) => {
                    return <Text key={idx + index}>{`${ingredient}`}</Text>
                  })}
                  <Image
                  style={{width: (Dimensions.get('window').width/3)*2, height: (Dimensions.get('window').width/3)*2}}
                  source={{uri: recipe.photoUri}}
                  />
                </View>
              </TouchableHighlight>
            );
          })
        }
        <Button
          onPress={() => navigate('AddRecipe')}
          title="Add a new Recipe?"
        />
      </ScrollView>
    );
  }
}
