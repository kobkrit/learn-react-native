/**
 * l9 Map 2
 * https://github.com/kobkrit/learn-react-native
 * @flow
 */

import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View, Dimensions} from 'react-native';
var {height, width} = Dimensions.get('window');
import MapView from 'react-native-maps';

export default class l9_map extends Component {
  render() {
    return (
      <View style={styles.container}>
        <MapView style={styles.map} initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.9,
          longitudeDelta: 1.8
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
  },
  map:{
    width: width,
    height: height
  }
});

AppRegistry.registerComponent('l9_map', () => l9_map);
