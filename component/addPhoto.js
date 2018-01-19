import React, {Component} from 'react';
import { View, ScrollView} from 'react-native';

import TakePhoto from './photo';
import Gallery from './gallery';
import Header from "./header";

//styles
import connectedStyles from './style';

export default class AddPhoto extends Component {
  render() {
    return (
      <View style={connectedStyles.screen}>
        <Header />
        <ScrollView style={connectedStyles.main} horizontal={true}>
          <Gallery navigation={this.props.navigation} />
          <TakePhoto navigation={this.props.navigation} />
        </ScrollView>
       </View>
    );
  }
}