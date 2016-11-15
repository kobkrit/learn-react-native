/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View, DeviceEventEmitter} from 'react-native';
import {Accelerometer, Gyroscope, Magnetometer} from 'NativeModules';

export default class motion extends Component {
  constructor(props){
    super(props);
    this.state = {
      x: 0,
      y: 0,
      z: 0
    }
  }

  componentDidMount() {
    Accelerometer.setAccelerometerUpdateInterval(0.1); // in seconds
    DeviceEventEmitter.addListener('AccelerationData', (data) => {
      this.setState({
        x: data.acceleration.x,
        y: data.acceleration.y,
        z: data.acceleration.z,
      });
    });
    Accelerometer.startAccelerometerUpdates(); // you'll start getting AccelerationData events above
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          X: {this.state.x}
        </Text>
        <Text style={styles.welcome}>
          Y: {this.state.y}
        </Text>
        <Text style={styles.welcome}>
          Z: {this.state.z}
        </Text>
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
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }
});

AppRegistry.registerComponent('motion', () => motion);
