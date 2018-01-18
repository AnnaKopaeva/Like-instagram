import React from 'react';
import { Text, View, Image, Button, TouchableOpacity, StyleSheet } from 'react-native';
import { Camera, Permissions } from 'expo';

export default class TakePhoto extends React.Component {
  constructor(props){
    super(props);
    this.takePhoto = this.takePhoto.bind(this);
  }

  state = {
    hasCameraPermission: null,
    type: Camera.Constants.Type.back,
    photo: {}
  };

  async componentWillMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  }

  takePhoto = async () => {
    if (this.camera) {
      let photo = await this.camera.takePictureAsync();
      this.setState({photo})
    }
  };

  render() {
    const { hasCameraPermission, photo } = this.state;
    if (hasCameraPermission === null) {
      return <View />;
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    } else {
      return (
        <View style={{ flex: 1 }}>
          <Camera style={{ flex: 1, width: 300, justifyContent: 'flex-end'}}
                  type={this.state.type}
                  ref={ref => { this.camera = ref; }}>
            <View
              style={{
                flex: 1,
                backgroundColor: '#000',
                flexDirection: 'row',
                maxHeight: 40,
                justifyContent: 'center'
              }}>
              <TouchableOpacity
                style={{justifyContent: 'center'}}
                onPress={this.takePhoto.bind(this)}>
                <View style={styles.photoBtn}>
                  <View style={styles.photoBtnCircle}>
                    <View style={styles.photoBtnTwoCircle}>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={{justifyContent: 'flex-end'}}
                onPress={() => {
                  this.setState({
                    type: this.state.type === Camera.Constants.Type.back
                      ? Camera.Constants.Type.front
                      : Camera.Constants.Type.back,
                  });
                }}>
                <Image
                  style={{width: 20, height: 20}}
                  source={require('./images/camera-switch.png')}
                />
              </TouchableOpacity>
            </View>
          </Camera>
          <View>
            <Image
              style={{width: 80, height: 80}}
              source={{uri: photo.uri}}
            />
          </View>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  buttonsPhoto: {
    paddingLeft: 20,
    paddingRight: 20,
  },
  photoBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  photoBtnCircle: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  photoBtnTwoCircle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#fff',
  }
});
