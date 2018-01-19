import React from 'react';
import { View, Image, Text, Button, ScrollView, CameraRoll, Dimensions, TouchableHighlight } from 'react-native';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import * as addActions from '../actions/addActions';

var width = Dimensions.get('window').width;

class Gallery extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      photos: [],
      cameraRollInfo: {has_next_page: true},
      active: 0
    }
  }

  componentDidMount() {
    CameraRoll.getPhotos({
      first: 9,
      assetType: 'All',
    })
      .then(r => {
        this.setState({ photos: r.edges, cameraRollInfo: r.page_info });
      })
  };

  addPhotos = () => {
    let {cameraRollInfo: {has_next_page, end_cursor}} = this.state;

    if (has_next_page) {
      CameraRoll.getPhotos({
        first: 9,
        assetType: 'All',
        after: end_cursor,
      })
        .then(r => {
          this.setState({ photos: [...this.state.photos, ...r.edges], cameraRollInfo: r.page_info });
        })
    }
  };

  sentPhoto = () => {
    let {active} =this.state;
    let uri = this.state.photos[active].node.image.uri;
    let params = this.props.navigation.state.params;

    if (params && params.type === 'avatar') {
      this.props.actions.changeAvatar(uri);
      this.props.navigation.setParams({type: undefined});
      this.props.navigation.navigate('Profile');

    } else {
      this.props.actions.addMainPhoto(uri);
      this.props.navigation.navigate('DetailPhoto');
    }
  }

  pressImage = (active) => {
    this.setState({active});
    console.log(active)
  }

  getGalery = (items) => {
    let j = items.length,
      chunk = 3,
      list = [];

    for (let i=0; i < j; i += chunk) {
      let subItems = items.slice(i, i+chunk).map((p, key) => {
        return (
          <TouchableHighlight onPress={() => this.pressImage(key + i)} key={key + i }>
            <Image
               style={{
                  width: Math.floor(width/3),
                  height: Math.floor(width/3),
                  borderWidth: 1,
                  borderColor: 'white'
                }}
                source={{ uri: p.node.image.uri }}
                resizeMode="cover"
            />
          </TouchableHighlight>
        );
      });
      list = [...list, subItems]
    }
    return list.map((photo, key) => {
      return (
        <View style={{flexDirection: 'row'}} key={key}>
          {photo}
        </View>
      )})
  }

  render() {
    let {photos, active, cameraRollInfo: {has_next_page}} = this.state;
    return (
      <View style={{flex: 1}}>
        { photos[0] &&
          <View style={{borderBottomWidth: 1, borderColor: 'white'}}>
            <Image
              style={{width: width, height: width}}
              source={{ uri: photos[active].node.image.uri }}
              resizeMode="cover"/>
            <Button
              title='add'
              onPress={this.sentPhoto}
              style={{width: 40, height: 40, position: 'absolute', top: 10, right: 10, zIndex: 5, borderRadius: 20}}/>
          </View>
        }
        <ScrollView>
          {this.getGalery(photos)}
          { photos[0] && has_next_page &&
            <Button title="...more images" onPress={this.addPhotos}/>
          }
        </ScrollView>
      </View>
    );
  }
}

export default connect(state => ({
    state: state.addInfo
  }),
  (dispatch) => ({
    actions: bindActionCreators(addActions, dispatch)
  })
)(Gallery);

