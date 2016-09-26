/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Navigator,
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

class l7_movie extends Component {
  render() {
    return (
      <Navigator
        style={styles.container}
        initialRoute={{title:'Awesome Scene', index: 0}}
        renderScene={(route, navigator) =>
          <Text>Hello {route.title}!</Text>
        }
      ></Navigator>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 100
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('l7_movie', () => l7_movie);
