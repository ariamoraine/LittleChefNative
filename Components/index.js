import React, { Component } from 'react';
import {
  Text,
  Image,
  TouchableOpacity
} from 'react-native';
import { fetchAllRecipes } from '../actions';
import store from '../configureStore';
import { indexPage } from '../assets/styles/theme';
const forkImage = require('../assets/photos/white.png');

export default class HomeScreen extends Component {

  constructor (props) {
    super(props);
    this.state = store.getState();
  }

  componentDidMount () {
    this.unsubscribe = store.subscribe(() => {
      this.setState(store.getState());
    });
    this.loadRecipes();
  }

  componentWillUnmount () {
    this.unsubscribe();
  }

  componentDidUpdate () {
    setTimeout(() => {
      this.props.navigation.navigate('AllRecipes');
    }, 1500);
  }

  loadRecipes () {
    store.dispatch(fetchAllRecipes());
  }

  render() {
    return (
      <Image
        source={require('../assets/photos/main_food.jpg')}
        style={indexPage.backgroundImage}>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('AllRecipes')}>
          <Text style={indexPage.welcomeText}>{`Welcome\nto\nLittle Chef!`}</Text>
        </TouchableOpacity>
        <Image source={forkImage} style={indexPage.knifeForkLogo} />
      </Image>
    );
  }
}
