import React, { Component } from 'react';
import {
  Text,
  Image,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import { fetchAllRecipes } from '../actions';
import store from '../configureStore';
import { MAINFONT, TEXTHEADERSIZE } from '../assets/styles/theme';


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
        style={styles.backgroundImage}>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('AllRecipes')}>
          <Text style={styles.welcomeText}>NEED A LITTLE CHEF?</Text>
        </TouchableOpacity>
      </Image>
    );
  }
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover',
    justifyContent: 'center',
    flexDirection: 'column'
  },
  welcomeText: {
    textAlign: 'center',
    color: 'white',
    backgroundColor: 'rgba(0,0,0,0)',
    fontSize: TEXTHEADERSIZE,
    fontFamily: MAINFONT
  }
});
