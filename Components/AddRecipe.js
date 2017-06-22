import React, { Component } from 'react';
import {
  View,
  Button,
  Text,
  TextInput,
  StyleSheet,
} from 'react-native';
import store from '../configureStore';
import { saveNewRecipe } from '../actions';

//temp styles just to mark a little bit
const styles = StyleSheet.create({
  lines: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: 'black',
    width: 400,
  }
});

export default class AddRecipe extends Component {

  constructor (props) {
    super(props);
    this.state = {
      title: '',
      allIngredients: [],
      currentIngredient: '',
      directions: '',
      inputText: '',
      allrecipes: store.getState().recipesReducer.recipes
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleIngInput = this.handleIngInput.bind(this);
  }

  componentDidMount () {
    this.unsubscribe = store.subscribe(() => {
      this.setState(store.getState());
    });
  }

  componentWillUnmount () {
    this.unsubscribe();
  }

  handleIngInput () {
    this.setState({
      allIngredients: [...this.state.allIngredients, this.state.currentIngredient],
      currentIngredient: ''
    });
  }

  handleInput (text, type) {
    this.setState({
      [type]: text
    });
  }

  saveData() {
    const newRecipeObj = {
      title: this.state.title,
      allIngredients: this.state.allIngredients,
      directions: this.state.directions
    };

    store.dispatch(saveNewRecipe(newRecipeObj));
  }

  render () {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text>Add a recipe here!</Text>
        {/* Title input area */}
        <View
          style={styles.lines}>
          <TextInput
            placeholder="Title"
            onChangeText={(text) => this.handleInput(text, "title")}
            value={this.state.title}
          />
        </View>

        {/* Ingredient input area */}
        <View
          style={styles.lines}>
          <Text>Ingredients List :</Text>
          {this.state.allIngredients.map((ing, index) => <Text key={index}>{` -> ${ing}`}</Text>)}
          <TextInput
            onChangeText={(ingredient) => this.handleInput(ingredient, "currentIngredient")}
            value={this.state.currentIngredient}
          />
          <Button
            title="ADD"
            onPress={this.handleIngInput}
          />
        </View>

        {/* Directions input area */}
        <View
          style={styles.lines}>
          <TextInput
            placeholder="Directions"
            onChangeText={(text) => this.handleInput(text, "directions")}
            value={this.state.directions}
            multiline={true}
          />
        </View>
      {
        /* Save recipe button should build the recipe object and save it to the db
        and route us back to the main recipe page where the new recipe will display */
      }
        <Button
          onPress={() => {
            this.saveData();
            navigate('AllRecipes');
          }}
          title="SAVE AND ADD"
        />
      </View>
    );
  }
}
