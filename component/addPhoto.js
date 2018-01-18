import React, {Component} from 'react';
import { View, Button } from 'react-native';

import TakePhoto from './photo';
import Gallery from './gallery';
import Header from "./header";

export default class AddPhoto extends Component {
  constructor(props){
    super(props);
    this.state = {
      takePhoto: false,
      choosePhoto: false
    }
  }

  takePhoto = () => {
    let takePhoto = true;
    this.setState({takePhoto})
  }

  choosePhoto = () => {
    let choosePhoto = true;
    this.setState({choosePhoto})
  }
  render() {
    let { takePhoto, choosePhoto } = this.state;
    return (
      <View style={{flex: 1, paddingTop: 20}}>
        <Header/>
        <Button title="Take photo" onPress={this.takePhoto}/>
        {takePhoto && <TakePhoto />}
        <Button title="Choose from library" onPress={this.choosePhoto}/>
        {choosePhoto && <Gallery />}
       </View>
    );
  }
}