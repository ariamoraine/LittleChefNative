import React, { Component } from 'react';
import {
  Text,
  View,
  Button,
  Picker,
  TouchableHighlight
} from 'react-native';
import { getTheme } from 'react-native-material-kit';
import { allRecipes } from '../assets/styles/theme';
import store from '../configureStore';


export default class AddOrEditChoice extends Component {

  constructor (props) {
    super(props);
    this.state = {
      currentRecipe: {},
      allrecipes: store.getState().recipesReducer.recipes
    };
  }

  componentDidMount () {
    this.unsubscribe = store.subscribe(() => {
      this.setState(store.getState());
    });
  }

  componentWillUnmount () {
    this.unsubscribe();
  }

  render () {
    const theme = getTheme();
    const { navigate } = this.props.navigation
    return (
      <View>
        <TouchableHighlight onPress={() => navigate('AddRecipe')}>
          <Text style={allRecipes.headerText }>ADD A RECIPE</Text>
        </TouchableHighlight>
        <Button
          style={allRecipes.headerText}
          onPress={() => navigate('AddRecipe')}
          title='Add a recipe'
        />
        <Picker
          selectedValue={this.state.currentRecipe}
          onValueChange={(item) => this.setState({currentRecipe: item})}
          >
          {
            this.state.allrecipes.map(recipe => <Picker.Item key={recipe.key} label={`${recipe.title}`} value={recipe} />)
          }
        </Picker>
        <Button
          onPress={() => this.props.navigation.navigate('AddRecipe', {currentRecipe: this.state.currentRecipe})}
          title="Edit Recipe"
        />
      </View>
    )
  }
}
