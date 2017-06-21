import React, { Component } from 'react';
import {
  View,
  Text,
  Button
} from 'react-native';
import { fetchAllRecipes } from '../actions';
import store from '../configureStore';

export default class HomeScreen extends Component {

  constructor (props) {
    super(props);
    this.state = store.getState();
    this.loadRecipes = this.loadRecipes.bind(this);
  }

  componentDidMount () {
    this.unsubscribe = store.subscribe(() => {
      this.setState(store.getState());
    });
  }

  componentWillUnmount () {
    this.unsubscribe();
  }

  loadRecipes () {
    console.log('Inside Load Recipes')
    store.dispatch(fetchAllRecipes())
  }

  render() {
    return (
      <View>
        <Text>Need a Little Chef?</Text>
        <Button
          onPress={() => {
            this.loadRecipes();
            this.props.navigation.navigate('AllRecipes')
          }}
          // onPress={() => this.props.fetchAllRecipes()}
          title="Yes Please!"
        />
      </View>
    );
  }
}
