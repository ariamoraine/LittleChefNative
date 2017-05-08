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
  Dimensions,
  TextInput
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // flexDirection: 'column',
    justifyContent: 'center',
    // alignItems: 'stretch',
    backgroundColor: '#6184D3',
    margin: 10,
  },
  welcome: {
    flex: 1,
    fontSize: 20,
    margin: 10,
    textAlign: 'center',
    backgroundColor: 'blue',
  },
  instructions: {
    flex: 1,
    margin: 10,
    textAlign: 'center',
    color: '#FF8E30',
    marginBottom: 5,
    backgroundColor: 'grey',
  },
  picture: {
    margin: 10,
    flex: 5,
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
      testText: "Some test text",
      text: ''
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
          Welcome to tester app!
        </Text>
        <Text style={styles.instructions}>
          Puppies are cute, but kittens are better.
        </Text>
        <TextInput
          style={{height: 40}}
          placeholder="This is some placeholder"
          onChangeText={text => this.setState({text})}
          />
        <Text style={{padding: 10, fontSize: 42}}>
          {this.state.text.split(' ').map(word => word && '🍕').join(' ')}
        </Text>
        <Image source={this.state.testPic} style={styles.picture} />
        <Button
          onPress={this._onPressButton.bind(this)}
          title="Want a kitten? Click here!"
          color="#841584"
        />
      </View>
    );
  }
}
// <TouchableHighlight onPress={this.onPress}>
// <Text>Button</Text>
// </TouchableHighlight>
//<Text>{this.state.testText}</Text>
//<TestingCall />
//<Image source={this.state.testPic} style={{height, width}} />
//<Image source={testPic} style={{height, width}} />
AppRegistry.registerComponent('littleChef', () => littleChef);
