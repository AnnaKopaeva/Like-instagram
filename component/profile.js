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

  onFocus = () => {
    this.setState({
      focus: true
    })
  }

  onBlur = () => {
    this.setState({
      focus: false
    })
  }

  changeAvatar = () => {
    this.props.navigation.navigate('AddPhoto', {type: 'avatar'});
  }

  render() {
    let { camera, userPhoto, focus } = this.state;
    const { state, actions } = this.props;

    return (
      <View style={{flex: 1, paddingTop: 20}}>
        <Header/>
        <View style={{flex:1}}>
          <TouchableHighlight onPress={this.changeAvatar}>
            <Image
              style={{width:60, height: 60, margin: 25}}
              source={{uri: state.avatarUri}}
            />
          </TouchableHighlight>
          <TextInput
            style={[focus &&{borderColor: 'gray', borderWidth: 1}, {height: 40, margin: 15, paddingLeft: 10, fontWeight: 'bold'}]}
            value={state.name}
            onChangeText={actions.changeUserName}
            onFocus={this.onFocus}
            onBlur={this.onBlur}
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