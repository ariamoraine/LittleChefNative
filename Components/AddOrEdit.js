import React, { Component } from 'react';
import {
  Text,
  View,
  Button,
  Picker
} from 'react-native';
import store from '../configureStore';

export default class AddOrEdit extends Component {

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
    console.log(this.state)
    return (
      <View>
        <Button
          onPress={() => this.props.navigation.navigate('AddRecipe')}
          title='Add a recipe'
        />
        <Picker
          selectedValue={this.state.currentRecipe}
          onValueChange={(item) => this.setState({currentRecipe: item})}
        >
          {
            this.state.allrecipes.map(recipe => <Picker.Item label={`${recipe.title}`} value={recipe} />)
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
