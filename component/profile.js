import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import { View, Image, TextInput, TouchableHighlight } from 'react-native';
import * as addActions from '../actions/addActions';

import Header from './header'

class Profile extends Component {
  state = {
    userPhoto: './images/user.png',
    camera: false
  }

  changeAvatar = () => {
    // let { userPhoto } = this.state;
    let camera = true;
    this.setState(camera)
    console.log('some')
  }

  render() {
    let { camera, userPhoto } = this.state;
    const { state, actions } = this.props;

    return (
      <View style={{flex: 1, paddingTop: 20}}>
        <Header />
        <View style={{flex:1}}>
          <TouchableHighlight onPress={this.changeAvatar}>
            <Image
              style={{width:60, height: 60}}
              source={require('./images/user.png')}
            />
            {/*{camera && <TakePhoto />}*/}
          </TouchableHighlight>
          <TextInput
            style={{height: 40, borderColor: 'gray', borderWidth: 1}}
            onChangeText={(name) => state.name}
            value={state.name}
          />
          <TextInput
            style={{height: 40, borderColor: 'gray', borderWidth: 1}}
            value={state.surname}
          />
        </View>
      </View>
    );
  }
}

export default connect(state => ({
    state: state.addInfo
  }),
  (dispatch) => ({
    actions: bindActionCreators(addActions, dispatch)
  })
)(Profile);