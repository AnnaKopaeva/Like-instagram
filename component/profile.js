import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import FooterTabsIconExample from './footer';

export default class Profile extends Component {
  render() {
    return (
      <View style={{flex: 1, paddingTop: 20}}>
        <View style={{height: 40, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center'}}>
          <Image
            style={{width:30, height: 30, position: 'absolute', zIndex:5, left: 5}}
            resizeMode="contain"
            source={require('../icon-photo.png')}
          />
          <Image
            style={{height: 30, margin: 'auto'}}
            resizeMode="contain"
            source={require('../instagram_logo.svg')}
          />
        </View>
        <Text>Your name</Text>
        <Text>Your phone</Text>
        <View style={{height: 40}}>
          <FooterTabsIconExample />
        </View>
      </View>
    );
  }
}
