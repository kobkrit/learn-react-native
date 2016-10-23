/**
 * l9 Map 1
 * https://github.com/kobkrit/learn-react-native
 * @flow
 */

import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View} from 'react-native';
import MapView from 'react-native-maps';

export default class l9_map extends Component {
  render() {
    return (
      <View style={styles.container}>
        <MapView initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421
        }}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  }
});

AppRegistry.registerComponent('l9_map', () => l9_map);
