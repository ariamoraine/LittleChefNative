import './App';

// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  * @flow
//  */

// import React, { Component } from 'react';
// import {
//   AppRegistry,
//   StyleSheet,
//   Text,
//   View,
//   Button,
//   Image,
//   StackNavigator,
// } from 'react-native';

// const contrastColor = '#00897b'

// const App = StackNavigator({
//   Main: {screen: MainScreen},
//   Profile: {screen: TestingCall}
// })

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     flexDirection: 'column',
//     justifyContent: 'space-around',
//     alignItems: 'stretch',
//     backgroundColor: '#fbf6df'
//   },
//   welcome: {
//     // flex: 1,
//     fontSize: 40,
//     margin: 10,
//     textAlign: 'center',
//     backgroundColor: contrastColor,
//   },
//   button: {
//     color: contrastColor,
//   },
//   // instructions: {
//   //   flex: 1,
//   //   margin: 10,
//   //   textAlign: 'center',
//   //   color: '#00897b',
//   //   marginBottom: 5,
//   //   backgroundColor: 'grey',
//   // },
//   picture: {
//     flex: 2,
//     margin: 10,
//     height: 100,    // flex: 5,
//   }
// });

// class TestingCall extends Component {
//   render(){
//     return (
//       <Text>SOME TEXT HERE</Text>
//     )
//   }
// }

// class MainScreen extends Component {

//   constructor (props) {
//     super(props);
//     this.state = {
//       testPic: {
//         uri: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTIyHhXZB8R393t4WxFUDZOID3db0hHhb86XAArbhna2PSJ9NgFKnQXqy0"
//       },
//       testText: "Some test text",
//       text: ''
//     };
//   }

//   _onPressButton () {
//     // Alert.alert("You clicked it ");
//     this.setState({testText: 'Something new here'});
//     this.setState({testPic: {uri: "http://images4.fanpop.com/image/photos/22400000/Cute-Kitten-kittens-22438020-480-360.jpg"}});
//   }

//   static navigationOptions = {
//     title: "Welcome",
//   };

//   render() {
//     const { navigate } = this.props.navigation;
//     return (
//       <View style={styles.container}>
//         <Text style={styles.welcome}>
//           Need a Little Chef in your life?
//         </Text>
//         <Button
//           // style={styles.button}
//           color={contrastColor}
//           // onPress={this._onPressButton.bind(this)}
//           onPress={() => {
//             navigate('Profile');
//           }}
//           title="Yes Please!"
//         />
//       </View>
//     );
//   }
// }

// //<Image source={this.state.testPic} style={styles.picture} />
// // let testPic = {uri: "http://images4.fanpop.com/image/photos/22400000/Cute-Kitten-kittens-22438020-480-360.jpg"};
// // let {height, width} = Dimensions.get('window');

// //<ScrollView style={{height: 10000}}>
// // <Text style={styles.instructions}>
// //   Puppies are cute, but kittens are better.
// // </Text>
// // <TextInput
// //   style={{height: 40}}
// //   placeholder="This is some placeholder"
// //   onChangeText={text => this.setState({text})}
// //   />
// // <Text style={{padding: 10, fontSize: 42}}>
// //   {this.state.text.split(' ').map(word => word && '🍕').join(' ')}
// // </Text>
//         //</ScrollView>
// // <TouchableHighlight onPress={this.onPress}>
// // <Text>Button</Text>
// // </TouchableHighlight>
// //<Text>{this.state.testText}</Text>
// //<TestingCall />
// //<Image source={this.state.testPic} style={{height, width}} />
// //<Image source={testPic} style={{height, width}} />
// AppRegistry.registerComponent('littleChef', () => littleChef);
