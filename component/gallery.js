import React from 'react';
import { View, Image, Button, ScrollView, CameraRoll, Dimensions } from 'react-native';
import FooterTabsIconExample from './footer';

var width = Dimensions.get('window').width;

export default class Gallery extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      photos: [],
      cameraRollInfo: {has_next_page: true}
    }
  }

  componentDidMount() {
    CameraRoll.getPhotos({
      first: 10,
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
        first: 10,
        assetType: 'All',
        after: end_cursor,
      })
        .then(r => {
          this.setState({ photos: [...this.state.photos, ...r.edges], cameraRollInfo: r.page_info });
        })
    }
  };

  getGalery = (items) => {
    let j = items.length,
      chunk = 3,
      list = [];

    for (let i=0; i < j; i += chunk) {
      let subItems = items.slice(i, i+chunk).map((p, i) => {
        return (
            <Image
              key={i}
            style={{
            width: Math.floor(width/3),
            height: Math.floor(width/3),
            }}
            source={{ uri: p.node.image.uri }}
            resizeMode="cover"
            />
        );
      });
      list = [...list, subItems]
    }
    return list.map((p, i) => {
      return (<View style={{
          flexDirection: 'row'}}
                    key={i}>
        {p}
      </View>
      )})
  }

  render() {
    let {photos, cameraRollInfo: {has_next_page}} = this.state;
    return (
      <View style={{flex: 1}}>
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
          <ScrollView>
            {this.getGalery(photos)}
            { photos[0] && has_next_page &&
              <Button title="...more images" onPress={this.addPhotos}/>
            }
          </ScrollView>
        <View style={{height: 40}}>
          <FooterTabsIconExample />
        </View>
      </View>
    );
  }
}

