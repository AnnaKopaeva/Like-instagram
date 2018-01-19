import React from 'react';
import { Text, View, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { Camera, Permissions } from 'expo';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';

import * as addActions from '../actions/addActions';

//styles
import connectedStyles from './style';

var width = Dimensions.get('window').width;

class TakePhoto extends React.Component {
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
      let params = this.props.navigation.state.params;

      if (params && params.type === 'avatar') {
        this.props.actions.changeAvatar(photo.uri);
        this.props.navigation.setParams({type: undefined});
        this.props.navigation.navigate('Profile');

      } else {
        this.props.actions.addMainPhoto(photo.uri);
        this.props.navigation.navigate('DetailPhoto');
      }
    }
  }

  render() {
    const { hasCameraPermission } = this.state;
    if (hasCameraPermission === null) {
      return <View />;
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    } else {
      return (
        <View style={connectedStyles.main}>
          <Camera
            style={styles.cameraWrap}
            width={width}
            height={width}
            type={this.state.type}
            ref={ref => { this.camera = ref; }}>
            <TouchableOpacity
              style={{padding: 20}}
              onPress={() => {
                this.setState({
                  type: this.state.type === Camera.Constants.Type.back
                    ? Camera.Constants.Type.front
                    : Camera.Constants.Type.back,
                });
              }}>
              <Image
                style={styles.cameraSwitch}
                source={require('./images/camera-switch.png')}
              />
            </TouchableOpacity>
          </Camera>
          <View
            style={styles.wrapBtnTakePhoto}>
            <TouchableOpacity
              style={styles.btnTakePhoto}
              onPress={this.takePhoto.bind(this)}>
              <View style={styles.photoBtn}>
                <View style={styles.photoBtnCircle}>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      );
    }
  }
}

export default connect(state => ({
    state: state.addInfo
  }),
  (dispatch) => ({
    actions: bindActionCreators(addActions, dispatch)
  })
)(TakePhoto);

const styles = StyleSheet.create({
  cameraWrap: {
    justifyContent: 'flex-end',
    flexDirection: 'column'
  },
  cameraSwitch: {
    width: 30,
    height: 30
  },
  wrapBtnTakePhoto: {
    backgroundColor: 'white',
    height: 200,
    width: width,
  },
  btnTakePhoto: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonsPhoto: {
    paddingLeft: 20,
    paddingRight: 20,
  },
  photoBtn: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#666',
    justifyContent: 'center',
    alignItems: 'center',
  },
  photoBtnCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  }
});
