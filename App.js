import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, Button, ScrollView, CameraRoll } from 'react-native';
import { StackNavigator } from 'react-navigation';
import FooterTabsIconExample from './component/footer';
import CameraExample from './component/picture';
import Gallery from './component/gallery';
import Profile from './component/profile';

class Welcome extends Component {
  static navigationOptions = {
    // title: 'Welcome',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={{flex: 1, paddingTop: 0}}>
       <View style={{height: 40, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center'}}>
         <Image
           style={{width:30, height: 30, position: 'absolute', zIndex:5, left: 5}}
           resizeMode="contain"
           source={require('./icon-photo.png')}
         />
         <Image
           style={{height: 30, margin: 'auto'}}
           resizeMode="contain"
           source={require('./instagram_logo.svg')}
         />
       </View>
        <View style={{flex: 1}}>
          <Button
            title="Go to Jane's profile"
            onPress={() =>
              navigate('Gallery')
            }
          />
        </View>
        <View style={{height: 40}}>
           <FooterTabsIconExample />
         </View>
      </View>
    );
  }
};

export default App = StackNavigator({
  Main: { screen: Welcome },
  Gallery: { screen: Gallery },
  Profile: { screen: Profile },
  Camera: { screen: CameraExample },
});
//
// export default class App extends React.Component {
//   constructor(props){
//     super(props);
//     this.state = {
//       takePhoto: false,
//       choosePhoto: false
//     }
//   }
//
//   takePhoto = () => {
//     let takePhoto = true;
//     this.setState({takePhoto})
//   }
//
//   choosePhoto = () => {
//     let choosePhoto = true;
//     this.setState({choosePhoto})
//   }
//
//   render() {
//     let { takePhoto, choosePhoto } = this.state;
//     return (
//       <View style={{flex: 1, paddingTop: 20,}}>
//         <View style={{height: 40, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center'}}>
//           <Image
//             style={{width:30, height: 30, position: 'absolute', zIndex:5, left: 5}}
//             resizeMode="contain"
//             source={require('./icon-photo.png')}
//           />
//           <Image
//             style={{height: 30, margin: 'auto'}}
//             resizeMode="contain"
//             source={require('./instagram_logo.svg')}
//           />
//         </View>
//         <View style={{flex: 1}}>
//           <Button title="Take photo" onPress={this.takePhoto}/>
//           {takePhoto && <CameraExample />}
//           <Button title="Choose from library" onPress={this.choosePhoto}/>
//           {choosePhoto && <Gallery />}
//         </View>
//         <View style={{height: 40,}}>
//           <FooterTabsIconExample />
//         </View>
//       </View>
//     );
//   }
// }
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderWidth: 3,
//     borderColor: 'red',
//     paddingTop: 60,
//     paddingBottom: 40,
//   }
// });
