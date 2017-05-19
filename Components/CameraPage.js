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

  constructor (props) {
    super(props)
    this.takePicture = this.takePicture.bind(this);
  }

  takePicture() {
    this.camera.capture()
    .then(data => console.log(data))
    .catch(err => console.trace(err));
  }

  render () {
    return (
      <Camera
        ref={(cam) => {
          this.camera = cam;
        }}
        style={styles.preview}
        aspect={Camera.constants.Aspect.fill}>
        <Text
          style={styles.capture}
          onPress={
            this.takePicture
          }>[CAPTURE]</Text>
      </Camera>
    );
  }
}
