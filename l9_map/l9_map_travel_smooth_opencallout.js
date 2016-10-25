/**
 * l9 Map Travel
 * https://github.com/kobkrit/learn-react-native
 * @flow
 */

import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity
} from 'react-native';
var {height, width} = Dimensions.get('window');
import MapView from 'react-native-maps';
import LocationButton from './l9_map_travel_locationButton_opencallout.js';

export default class l9_map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      region: {
        latitude: 13.764884,
        longitude: 100.538265,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005
      },
      markers: [
        {
          latlng: {
            latitude: 13.764884,
            longitude: 100.538265
          },
          image: require('./images/attention.png'),
          title: "Victory Monument",
          description: "A large military monument in Bangkok, Thailand."
        }, {
          latlng: {
            latitude: 13.763681,
            longitude: 100.538125
          },
          image: require('./images/music.png'),
          title: "Saxophone Club",
          description: "A music pub for saxophone lover"
        }, {
          latlng: {
            latitude: 13.764595,
            longitude: 100.537438
          },
          image: require('./images/shopping.png'),
          title: "Coco Depertment Store",
          description: "Fashion Department Store"
        }
      ]
    };
    this.onRegionChange = this.onRegionChange.bind(this);
    this.moveMaptoLocation = this.moveMaptoLocation.bind(this);
  }

  onRegionChange(region) {
    this.setState({region});
  }

  moveMaptoLocation(latlng, key) {
    this.refs.map.animateToRegion({
      latitudeDelta: 0.002,
      longitudeDelta: 0.002,
      ...latlng
    }, 1000);
    setTimeout(() => {
      console.log(this.refs, key);
      this.refs[key].showCallout();
    }, 1500);
  }

  render() {
    return (
      <View style={styles.container}>
        <MapView ref="map" style={styles.map} region={this.state.region} onRegionChange={this.onRegionChange}>
          {this.state.markers.map((marker, i) => (<MapView.Marker key={i} ref={i} coordinate={marker.latlng} image={marker.image} title={marker.title} description={marker.description}/>))}
        </MapView>
        <View style={styles.container}>
          {this.state.markers.map((marker, i) => (<LocationButton key={i} name={i} moveMaptoLocation={this.moveMaptoLocation} marker={marker}/>))}
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
  map: {
    width: width,
    height: height*2 / 3
  }
});

AppRegistry.registerComponent('l9_map', () => l9_map);
