import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import { View, Image, TextInput, TouchableHighlight, StyleSheet } from 'react-native';
import * as addActions from '../actions/addActions';

import Header from './header'

//styles
import connectedStyles from './style';

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

  //redirects to the screen gallery and photo
  changeAvatar = () => {
    this.props.navigation.navigate('AddPhoto', {type: 'avatar'});
  }

  render() {
    let { focus } = this.state;
    const { state, actions } = this.props;

    return (
      <View style={connectedStyles.screen}>
        <Header/>
        <View style={connectedStyles.main}>
          <TouchableHighlight
            style={styles.wrapperAvatarImage}
            onPress={this.changeAvatar}>
            <Image
              style={styles.avatarImage}
              source={{uri: state.avatarUri}}
            />
          </TouchableHighlight>
          <TextInput
            style={[focus && styles.focusInput, styles.textInput]}
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

const styles = StyleSheet.create({
  wrapperAvatarImage: {
    paddingTop: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  avatarImage: {
    width: 200,
    height: 200,
    borderRadius: 100
  },
  textInput: {
    height: 40,
    margin: 15,
    paddingLeft: 10,
    fontWeight: 'bold',
    textAlign: 'center',
    borderRadius: 5,
  },
  focusInput: {
    borderColor: 'gray',
    borderWidth: 1
  }
})

export default connect(state => ({
    state: state.addInfo
  }),
  (dispatch) => ({
    actions: bindActionCreators(addActions, dispatch)
  })
)(Profile);
