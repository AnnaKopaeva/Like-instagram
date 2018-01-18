import React, { Component } from 'react';
import { View, Image} from 'react-native';

export default class Header extends Component {
  render(){
    return(
      <View style={{height: 40, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center'}}>
        <Image
          style={{width: 30, height: 30, position: 'absolute', zIndex: 5, left: 5}}
          resizeMode="contain"
          source={require('./images/icon-photo.png')}
        />
        <Image
          style={{height: 30, margin: 'auto'}}
          resizeMode="contain"
          source={require('./images/instagram_logo.svg')}
        />
      </View>
    )
  }
}