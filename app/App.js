/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { Platform } from 'react-native';
import RootNav from './containers/navigators/RootNavigation';

export default class App extends React.Component {
  render() {
    return (
      <RootNav/>
    );
  }
}
