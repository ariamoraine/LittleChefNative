import React, { Component } from 'react';
import {
  Text,
  Image,
  TouchableHighlight,
} from 'react-native';
import { fetchAllRecipes } from '../actions';
import store from '../configureStore';

export default class HomeScreen extends Component {

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

  loadRecipes () {
    store.dispatch(fetchAllRecipes());
  }

  render() {
    return (
      <Image
        source={require('../public/main_food.jpg')}
        style={{
          flex: 1,
          width: null,
          height: null,
          resizeMode: 'cover',
          justifyContent: 'center',
          flexDirection: 'column'}
        }>

        <TouchableHighlight onPress={() => {
          this.loadRecipes();
          this.props.navigation.navigate('AllRecipes');
        }}>

        <Text style={{
          textAlign: 'center',
          color: 'white',
          backgroundColor: 'rgba(0,0,0,0)',
          fontSize: 32,
          }}>Want a little chef?</Text>
        </TouchableHighlight>
      </Image>
    );
  }
}
