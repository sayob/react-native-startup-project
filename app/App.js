/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { YellowBox } from 'react-native';
import RootNav from './containers/navigators/RootNavigation';

YellowBox.ignoreWarnings(['Remote debugger', 'Warning: isMounted(...)', 'You should only render one navigator explicitly', 'XAxis', 'Setting a timer'])

export default class App extends React.Component {
  render() {
    return (
      <RootNav/>
    );
  }
}
