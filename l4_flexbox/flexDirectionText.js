/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

class flexbox extends Component {
  render() {
    return (
      <View>
        <View style={styles.container1}>
          <Text style={styles.big}>Container 1: 1</Text>
          <Text style={styles.big}>Container 1: 2</Text>
          <Text style={styles.big}>Container 1: 3</Text>
        </View>
        <View style={styles.container2}>
          <Text style={styles.big}>Container 2: 1</Text>
          <Text style={styles.big}>Container 2: 2</Text>
          <Text style={styles.big}>Container 2: 3</Text>
        </View>
        <View style={styles.container3}>
          <Text style={styles.big}>Container 3: 1</Text>
          <Text style={styles.big}>Container 3: 2</Text>
          <Text style={styles.big}>Container 3: 3</Text>
        </View>
      </View>
    );
 }
}
const styles = StyleSheet.create({
  container1: {
  },
  container2: {
    flexDirection: 'column'
  },
  container3:{
    flexDirection: 'row'
  },
  big:{
    fontSize: 20
  }
});

AppRegistry.registerComponent('flexbox', () => flexbox);


{/* <View>
  {[...Array(3)].map((x, c) =>
    <View style={styles[`container${c+1}`]}>
    {[...Array(3)].map((x, i) =>
      <Text style={styles.big}>
        Container {c+1}: {i+1}
      </Text>
    )}
    </View>
  )}
</View> */}
