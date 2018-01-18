import React, {Component} from 'react';
import { View, Text } from 'react-native';

import Header from "./header";

export default class Home extends Component {

  render() {
    return (
      <View style={{flex: 1, paddingTop: 20}}>
        <Header/>
        <View style={{flex: 1}}>
          <Text>Other photo</Text>
        </View>
      </View>
    );
  }
};