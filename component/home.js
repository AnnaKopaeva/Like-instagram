import React, {Component} from 'react';
import { View, Image, Text, ScrollView, StyleSheet } from 'react-native';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';

import * as addActions from '../actions/addActions';

import Header from "./header";

//styles
import connectedStyles from './style';

class Home extends Component {
  render() {
    const { state } = this.props;
    let listPhoto = state.posts.map((photo, key) =>
      <View key={key}>
        <View style={styles.wrapAbout}>
          <Image
            style={styles.avatar}
            source={{uri: photo.avatar}}/>
          <Text>
            {photo.username}
          </Text>
        </View>
        <Image
          style={connectedStyles.imageSize}
          source={{uri: photo.imgUri}}
        />
        <Text
          style={styles.description}>
          {photo.description}
        </Text>
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

const styles = StyleSheet.create({
  wrapAbout: {
    flexDirection:'row',
    flexWrap:'nowrap',
    alignItems: 'center',
    padding: 10
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: 10
  },
  description: {
    padding: 10
  }
});

export default connect(state => ({
    state: state.addInfo
  }),
  (dispatch) => ({
    actions: bindActionCreators(addActions, dispatch)
  })
)(Home);
