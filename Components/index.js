import React, { Component } from 'react';
import {
  View,
  Text,
  Button
} from 'react-native';

export default class HomeScreen extends Component {

  render() {
    return (
      <View>
        <Text>Need a Little Chef?</Text>
        <Button
          onPress={() => this.props.navigation.navigate('AllRecipes')}
          title="Yes Please!"
        />
      </View>
    );
  }
}
