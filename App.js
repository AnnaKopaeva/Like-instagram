import React, {Component} from 'react';
import { StyleSheet, Image } from 'react-native'
import { TabNavigator } from 'react-navigation';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import * as reducers from './reducers';

import Home from './component/home';
import AddPhoto from './component/addPhoto';
import Profile from './component/profile';
import DetailPhoto from './component/detailPhoto';

const AppNavigation = TabNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <Image
          source={require('./component/images/home.png')}
          style={[styles.icon, {tintColor: tintColor}]}
        />
      ),
    }
  },
  AddPhoto: {
    screen: AddPhoto,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <Image
          source={require('./component/images/add.png')}
          style={[styles.icon, {tintColor: tintColor}]}
        />
      ),
    }
  },
  Profile: {
    screen: Profile,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <Image
          source={require('./component/images/profile.png')}
          style={[styles.icon, {tintColor: tintColor}]}
        />
      ),
    }
  },
  DetailPhoto: {
    screen: DetailPhoto,
    }
  }, {
    tabBarOptions: {
    showLabel: false,

  }


});

const styles = StyleSheet.create({
  icon: {
    width: 20,
    height: 20,
  },
});

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const reducer = combineReducers(reducers);
const store = createStoreWithMiddleware(reducer);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppNavigation />
      </Provider>
    );
  }
}