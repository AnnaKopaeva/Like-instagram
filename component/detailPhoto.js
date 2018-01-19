import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import { View, Button, Image, TextInput, TouchableHighlight, Dimensions, ScrollView } from 'react-native';
import * as addActions from '../actions/addActions';

import Header from './header'

var width = Dimensions.get('window').width;

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
    let { camera, userPhoto, focus } = this.state;
    const { state, actions } = this.props;

    return (
      <View style={{flex: 1, paddingTop: 20}}>
        <Header/>
        <View style={{flex:1}}>
          <ScrollView>
            <TouchableHighlight>
              <Image
                style={{width:width, height: width}}
                source={{uri: state.mainPhoto}}
              />
            </TouchableHighlight>
            <TextInput
              style={{borderColor: 'gray', borderWidth: 1, margin: 15, paddingLeft: 10, fontWeight: 'bold'}}
              value={this.state.description}
              onChangeText={this.changeDescription}
            />
            <Button title='add' onPress={this.pressAdd}/>
            <Button title='cancel' onPress={this.pressCancel}/>
          </ScrollView>
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
)(DetailPhoto);