import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
} from 'react-native';
import store from '../configureStore';

export default class singleRecipe extends Component {

  constructor (props) {
    super(props);
    this.state = store.getState(); //add in current recipe to the state?
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
    console.log(this.props.navigation.state.params.currentRecipe)
    return(
      <Text>SOMETHING HERE</Text>
    )
  }
}
