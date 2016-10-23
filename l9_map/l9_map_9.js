/**
 * l9 Map 9
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
  Image
} from 'react-native';
var {height, width} = Dimensions.get('window');
import MapView from 'react-native-maps';

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
          photo: require('./images/Victory_Monument.jpg'),
          title: "Victory Monument",
          description: "A large military monument in Bangkok, Thailand."
        },
        {
          latlng: {
            latitude: 13.763681,
            longitude: 100.538125
          },
          image: require('./images/music.png'),
          photo: require('./images/Saxophone.jpg'),
          title: "Saxophone Club",
          description: "A music pub for saxophone lover"
        }, {
          latlng: {
            latitude: 13.764595,
            longitude: 100.537438
          },
          image: require('./images/shopping.png'),
          photo: require('./images/coco.jpg'),
          title: "Coco Depertment Store",
          description: "Fashion Department Store"
        }
      ]
    };
    this.onRegionChange = this.onRegionChange.bind(this);
  }

  onRegionChange(region) {
    this.setState({region});
  }

  render() {
    return (
      <View style={styles.container}>
        <MapView style={styles.map} region={this.state.region} onRegionChange={this.onRegionChange}>
          {this.state.markers.map((marker, i) => (
            <MapView.Marker key={i} coordinate={marker.latlng} title={marker.title} description={marker.description}>
              <View style={styles.pin}>
                <Image style={styles.pinImage} source={marker.image}/>
                <Text style={styles.pinText}>
                  {marker.title}
                </Text>
              </View>
              <MapView.Callout>
                <View style={styles.callout}>
                  <Image style={styles.calloutPhoto} source={marker.photo}/>
                  <Text style={styles.calloutTitle}>{marker.title}</Text>
                  <Text>{marker.description}</Text>
                </View>
              </MapView.Callout>
            </MapView.Marker>
          ))}
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
  map: {
    width: width,
    height: height*2/3
  },
  pin: {
    backgroundColor: '#fffa',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 2,
    padding: 5,
    borderRadius: 10
  },
  pinImage: {
    width: 25,
    height: 25
  },
  pinText: {
    color: 'red'
  },
  callout:{
    flex: 1,
    paddingRight: 10,
    paddingBottom: 10,
    marginRight: 10,
    marginBottom: 10
  },
  calloutPhoto:{
    flex: 1,
    width: 166,
    height: 83
  },
  calloutTitle:{
    fontSize: 16,
  }
});

AppRegistry.registerComponent('l9_map', () => l9_map);
