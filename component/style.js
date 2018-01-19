'use strict';
import React from 'react-native';
import { Dimensions } from 'react-native';

var width = Dimensions.get('window').width;

var connectedStyles = React.StyleSheet.create({
  screen: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: 'white'
  },
  main: {
    flex: 1
  },
  icon: {
    width: 20,
    height: 20,
  },
  textAddPhoto: {
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center'
  },
  imageSize: {
    width:width,
    height: width
  }
});

module.exports = connectedStyles;