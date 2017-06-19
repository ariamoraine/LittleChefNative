import React, { Component } from 'react';
import {
  View,
  Text,
  Button
} from 'react-native';
import { Provider } from 'react-redux';
import configureStore from '../configureStore';


export default class HomeScreen extends Component {

  render() {

    const store = configureStore();

    return (
      <Provider store={store}>
        <View>
          <Text>Need a Little Chef?</Text>
          <Button
            onPress={() => this.props.navigation.navigate('AllRecipes')}
            title="Yes Please!"
          />
        </View>
      </Provider>
    );
  }
}
