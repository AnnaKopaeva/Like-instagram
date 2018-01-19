import React, { Component } from 'react';
import { View, Image } from 'react-native';

export default class Header extends Component {
  render(){
    return(
      <View style={{height: 40, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center'}}>
        <Image
          style={{height: 30, margin: 'auto'}}
          resizeMode="contain"
          source={require('./images/instagram_logo.svg')}
        />
      </View>
    )
  }
}