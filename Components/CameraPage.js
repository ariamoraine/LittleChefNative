import React, { Component } from 'react';
import Camera from 'react-native-camera';
import { Dimensions, Text } from 'react-native';

const styles = {
  preview: {
   flex: 1,
   justifyContent: 'flex-end',
   alignItems: 'center',
   height: Dimensions.get('window').height,
   width: Dimensions.get('window').width
 },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    color: '#000',
    padding: 10,
    margin: 40
  }
}

export default class CameraPage extends Component {

  // static navigationOptions = ({ navigation }) => ({
  //   title: 'Camera Page'
  // })

  takePicture() {
    this.camera.capture()
    .then(data => console.log(data))
    .catch(err => console.error(err))
  }

  render () {
    // const { navigate } = this.props.navigation;
    console.log("INSIDECAMERA")
    return (
      <Camera
        ref={(cam) => {
          this.camera = cam;
        }}
        style={styles.preview}
        aspect={Camera.constants.Aspect.fill}>
        <Text style={styles.capture} onPress={
          this.takePicture.bind(this)}>[CAPTURE]</Text>
      </Camera>
    )
  }
}
