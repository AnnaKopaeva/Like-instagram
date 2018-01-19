import React, {Component} from 'react';
import { View, Button, TouchableHighlight, Image, ScrollView} from 'react-native';

import TakePhoto from './photo';
import Gallery from './gallery';
import Header from "./header";

export default class AddPhoto extends Component {
  render() {
    return (
      <View style={{flex: 1, paddingTop: 20}}>
        <Header />
        <ScrollView style={{flex: 1}} horizontal={true}>
          <Gallery navigation={this.props.navigation} />
          <TakePhoto navigation={this.props.navigation} />
        </ScrollView>
       </View>
    );
  }
}