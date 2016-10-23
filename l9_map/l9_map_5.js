/**
 * l9 Map 5
 * https://github.com/kobkrit/learn-react-native
 * @flow
 */

import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View, Dimensions} from 'react-native';
var {height, width} = Dimensions.get('window');
import MapView from 'react-native-maps';

export default class l9_map extends Component {
  constructor(props){
    super(props);
    this.state = {
      region: {
        latitude: 13.764884,
        longitude: 100.538265,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      }
    };
    this.onRegionChange = this.onRegionChange.bind(this);
  }

  onRegionChange(region) {
    this.setState({ region });
  }

  render() {
    return (
      <View style={styles.container}>
        <MapView style={styles.map}
          region={this.state.region}
          onRegionChange={this.onRegionChange}
        >

        <MapView.Marker
           coordinate={{latitude: 13.764884, longitude: 100.538265}}
           title="Victory Monument"
           description="A large military monument in Bangkok, Thailand."
         />
        </MapView>
        <View style={styles.container}>
          <Text>
          Latitude: {this.state.region.latitude}{'\n'}
          Longitude: {this.state.region.longitude}{'\n'}
          LatitudeDelta: {this.state.region.latitudeDelta}{'\n'}
          LongitudeDelta: {this.state.region.longitudeDelta}
          </Text>
        </View>
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
    height: height*2/3
  }
});

AppRegistry.registerComponent('l9_map', () => l9_map);
