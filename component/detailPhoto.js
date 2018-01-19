import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import { View, Image, TextInput, Text, TouchableHighlight, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import * as addActions from '../actions/addActions';

import Header from './header'

//styles
import connectedStyles from './style';

class DetailPhoto extends Component {
  state = {
    description: ''
  }

  changeDescription = (description) =>{
    this.setState({description})
  }

  pressCancel = () => {
    this.setState({description: ''})
    this.props.navigation.navigate('Home');
  }

  pressAdd = () => {
    this.setState({description: ''})
    this.props.actions.addPost(this.props.state.mainPhoto, this.state.description)
    this.props.navigation.navigate('Home');
  }

  render() {
    const { state } = this.props;
    return (
      <View style={connectedStyles.screen}>
        <Header/>
        <View style={[connectedStyles.main, {backgroundColor: 'white'}]}>
          <ScrollView>
            <TouchableHighlight>
              <Image
                style={connectedStyles.imageSize}
                source={{uri: state.mainPhoto}}
              />
            </TouchableHighlight>
            <TextInput
              style={styles.description}
              placeholder='Enter a description to your photo'
              value={this.state.description}
              onChangeText={this.changeDescription}
            />
            <View style={styles.wrapBtn}>
              <TouchableOpacity
                onPress={this.pressAdd}
                style={[styles.btn, styles.btnAdd]}>
                <Text
                  style={connectedStyles.textAddPhoto}>
                  Add
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={this.pressCancel}
                style={[styles.btn, styles.btnCancel]}>
                <Text
                  style={[connectedStyles.textAddPhoto]}>
                  Cancel
                </Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  btn: {
    width: 250,
    paddingTop: 15,
    paddingBottom: 15,
    borderRadius: 5,
  },
  wrapBtn: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnAdd: {
    backgroundColor: 'white',
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#c8ccd0'
  },
  btnCancel: {
    backgroundColor: '#c8ccd0'
  },
  description: {
    borderRadius: 5,
    margin: 15,
    padding: 10,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center'
  }
});

export default connect(state => ({
  state: state.addInfo
}),
(dispatch) => ({
  actions: bindActionCreators(addActions, dispatch)
})
)(DetailPhoto);
