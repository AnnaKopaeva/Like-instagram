import React, { Component } from 'react';
import { Image, StyleSheet } from 'react-native';
import { Footer, FooterTab, Button, Icon, View, Content} from 'native-base';

import Home from './home';
import AddPhoto from './addPhoto';
import Profile from './profile';


export default class FooterTabsIconExample extends Component {
  state = {
    activeBtn: 1
  }
  renderSelectedTab () {
    switch (this.state.selectedTab) {
      case 'home':
        return (<Home />);
        break;
      case 'add':
        return (<AddPhoto />);
        break;
      case 'profile':
        return (<Profile />);
        break;
      default:
    }
  }

  onButtonPress = (activeBtn) => {
    this.setState({activeBtn});
    }

  render() {
    let {activeBtn} = this.state;
    return (
      <View>
        <Content>
          {this.renderSelectedTab()}
        </Content>
        <Footer style={{position: 'absolute', zIndex: 2, height: 40, bottom: 0}}>
          <FooterTab>
            <Button
              active={this.state.selectedTab==='home'}
              style={activeBtn === 1 ? styles.activeIcon : null}
              onPress={() => this.setState({selectedTab: 'Gallery'})}>
              <Image
                style={styles.icon}
                source={require('./images/home.png')} />
            </Button>
            <Button
              active={this.state.selectedTab==='add'}
              style={activeBtn === 2 ? styles.activeIcon : null}
              onPress={() => this.setState({selectedTab: 'AddPhoto'})}>
              <Image
                style={styles.icon}
                source={require('./images/add.png')} />
            </Button>
            <Button
              active={this.state.selectedTab==='profile'}
              style={activeBtn === 3 ? styles.activeIcon : null}
              onPress={() => this.setState({selectedTab: 'Profile'})}>
              <Image
                style={styles.icon}
                source={require('./images/profile.png')} />
            </Button>
          </FooterTab>
        </Footer>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  icon: {
    width: 20,
    height: 20
  },
  activeIcon: {
    backgroundColor: '#eee',
    height: 40
  }
});
