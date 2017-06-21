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
    let recipes = this.state.recipesReducer.recipes[0] || " ";
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text>All your recipes</Text>
        <Text>{`Recipes: ${recipes}`}</Text>
        <Text>
          These are all your saved recipes. If you would like to add another one. Click on the button below.
        </Text>
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
