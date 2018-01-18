import React, { Component } from 'react';
import { Footer, FooterTab, Button, Icon } from 'native-base';

export default class FooterTabsIconExample extends Component {
  render() {
    return (
        <Footer style={{position: 'absolute', zIndex: 2, height: 40, bottom: 0, borderWidth: 3, borderColor: 'green'}}>
          <FooterTab>
            <Button>
              <Icon name="apps" />
            </Button>
            <Button active>
              <Icon active name="person" />
            </Button>
          </FooterTab>
        </Footer>
    );
  }
}
