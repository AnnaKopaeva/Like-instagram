import React, { Component } from 'react';
import { View, Image, StyleSheet } from 'react-native';

export default class Header extends Component {
  render(){
    return(
      <View style={styles.header}>
        <Image
          style={styles.image}
          resizeMode="contain"
          source={require('./images/instagram_logo.svg')}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  header: {
    height: 40,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    height: 30,
    margin: 'auto'
  }
})