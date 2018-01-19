import React from 'react';
import { View, Image, Text,  Button, ScrollView, CameraRoll, TouchableHighlight, TouchableOpacity, Dimensions, StyleSheet } from 'react-native';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import * as addActions from '../actions/addActions';

//styles
import connectedStyles from './style';

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
      first: 51,
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
    let {actions, navigation} = this.props;
    let uri = this.state.photos[active].node.image.uri;
    let params = this.props.navigation.state.params;

    if (params && params.type === 'avatar') {
      actions.changeAvatar(uri);
      navigation.setParams({type: undefined});
      navigation.navigate('Profile');

    } else {
      actions.addMainPhoto(uri);
      navigation.navigate('DetailPhoto');
    }
  }

  pressImage = (active) => {
    this.setState({active});
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
               style={styles.miniImage}
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
      <View style={connectedStyles.main}>
        { photos[0] &&
          <View style={styles.wrapMainImage}>
            <Image
              style={connectedStyles.imageSize}
              source={{ uri: photos[active].node.image.uri }}
              resizeMode="cover"/>
            <TouchableOpacity
              onPress={this.sentPhoto}
              style={styles.addPhoto}>
              <Text
                style={connectedStyles.textAddPhoto}>
                Next
              </Text>
            </TouchableOpacity>
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

const styles = StyleSheet.create({
  miniImage: {
    width: Math.floor(width/3),
    height: Math.floor(width/3),
    borderWidth: 1,
    borderColor: 'white'
  },
  wrapMainImage: {
    borderBottomWidth: 1,
    borderColor: 'white'
  },
  addPhoto: {
    borderRadius: 60,
    padding: 15,
    backgroundColor: 'white',
    position: 'absolute',
    top: 10,
    right: 10,
  }
})

export default connect(state => ({
    state: state.addInfo
  }),
  (dispatch) => ({
    actions: bindActionCreators(addActions, dispatch)
  })
)(Gallery);
