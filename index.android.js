/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Alert,
  Button,
  Image,
  Dimensions
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#6184D3',
  },
  welcome: {
    flex: 1,
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    backgroundColor: 'black',
  },
  instructions: {
    flex: 1,
    textAlign: 'center',
    color: '#FF8E30',
    marginBottom: 5,
    backgroundColor: 'grey',
  },
  picture: {
    flex: 2,
    width: 200,
  }
});

class TestingCall extends Component {
  render(){
    return (
      <Text>SOME TEXT HERE</Text>
    )
  }
}

export default class littleChef extends Component {

  constructor (props) {
    super(props);
    this.state = {
      testPic: {
        uri: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTIyHhXZB8R393t4WxFUDZOID3db0hHhb86XAArbhna2PSJ9NgFKnQXqy0"
      },
      testText: "Some test text"
    };
  }

  _onPressButton () {
    // Alert.alert("You clicked it ");
    this.setState({testText: 'Something new here'});
    this.setState({testPic: {uri: "http://images4.fanpop.com/image/photos/22400000/Cute-Kitten-kittens-22438020-480-360.jpg"}});
  }

  render() {

    // let testPic = {uri: "http://images4.fanpop.com/image/photos/22400000/Cute-Kitten-kittens-22438020-480-360.jpg"};
    // let {height, width} = Dimensions.get('window');

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to Little Chef!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.android.js
        </Text>
        <Text style={styles.instructions}>
          Double tap R on your keyboard to reload,{'\n'}
          Shake or press menu button for dev menu
        </Text>
        <TouchableHighlight onPress={this.onPress}>
          <Text>Button</Text>
        </TouchableHighlight>
        <Button
          onPress={this._onPressButton.bind(this)}
          title="Test Button here"
          color="#841584"
        />
        <Image source={this.state.testPic} style={styles.picture} />
      </View>
    );
  }
}
//<Text>{this.state.testText}</Text>
//<TestingCall />
//<Image source={this.state.testPic} style={{height, width}} />
//<Image source={testPic} style={{height, width}} />
AppRegistry.registerComponent('littleChef', () => littleChef);
