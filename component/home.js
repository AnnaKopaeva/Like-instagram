import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';

import * as addActions from '../actions/addActions';
import { View, Image, Text, ScrollView, Dimensions, TouchableHighlight } from 'react-native';

import Header from "./header";

var width = Dimensions.get('window').width;

class Home extends Component {
  state = {
    number: '2'
  }

  addPost = () => {

  }

  render() {
    let { number } = this.state;
    const { state, actions } = this.props;
    let listPhoto = state.posts.map((photo, key) =>
      <View key={key}>
        <Image
          source={{uri: photo.avatarUri}}/>
        <Text>{photo.username}</Text>
        <Image
          style={{width: width, height: width}}
          source={{uri: photo.imgUri}}
        />
        <Text
          style={{paddingTop: 10}}
          >{photo.description}</Text>
      </View>
    )
    return (
      <View style={{flex: 1, paddingTop: 20}}>
        <Header navigation={this.props.navigation}/>
        <View style={{flex: 1}}>
          <ScrollView>
            {listPhoto}
          </ScrollView>
        </View>
      </View>
    );
  }
};
export default connect(state => ({
    state: state.addInfo
  }),
  (dispatch) => ({
    actions: bindActionCreators(addActions, dispatch)
  })
)(Home);