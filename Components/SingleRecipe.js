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
    const { title, allIngredients, directions, photoUri} = this.props.navigation.state.params.currentRecipe

    return (
      <View>
        <Image
          style={{width: 300, height: 300}}
          source={{uri: photoUri}}
        />
        <Text>{title}</Text>
        {
          allIngredients.map(ingredient => {
            return <Text>{ingredient}</Text>
          })
        }
        <Text>{directions}</Text>
      </View>
    );
  }
}
