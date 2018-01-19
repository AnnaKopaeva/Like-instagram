import React, {Component} from 'react';
import { Image } from 'react-native'
import { TabNavigator, StackNavigator } from 'react-navigation';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import * as reducers from './reducers';

import Home from './component/home';
import AddPhoto from './component/addPhoto';
import Profile from './component/profile';
import DetailPhoto from './component/detailPhoto';

//styles
import connectedStyles from './component/style';

const TabNavigation = TabNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <Image
          source={require('./component/images/home.png')}
          style={[connectedStyles.icon, {tintColor: tintColor}]}
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
          style={[connectedStyles.icon, {tintColor: tintColor}]}
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
          style={[connectedStyles.icon, {tintColor: tintColor}]}
        />
      ),
    }
  }
  }, {
    tabBarOptions: {
    showLabel: false,

  }
});
export const AppNavigation = StackNavigator({
  Tab: { screen: TabNavigation },
  DetailPhoto: {
    screen: DetailPhoto,
  }
},{
  headerMode: 'none',
  navigationOptions: {
    headerVisible: false,
  }
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