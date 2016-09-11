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
        <View style={styles.container}>
          <View style={[styles.item1, {flex:1}]}></View>
          <View style={[styles.item2, {flex:1}]}></View>
          <View style={[styles.item3, {flex:1}]}></View>
        </View>
        <View style={styles.container}>
          <View style={[styles.item1, {flex:1}]}></View>
          <View style={[styles.item2, {flex:2}]}></View>
          <View style={[styles.item3, {flex:1}]}></View>
        </View>
        <View style={styles.container}>
          <View style={[styles.item1, {flex:10}]}></View>
          <View style={[styles.item2, {flex:1}]}></View>
          <View style={[styles.item3, {flex:1}]}></View>
        </View>
      </View>
    );}}
const styles = StyleSheet.create({
  container: {
    marginBottom:5,
    height:100,
    flexDirection:'row'
  },
  item1:{
    backgroundColor: 'red'
  },
  item2:{
    backgroundColor: 'blue'
  },
  item3:{
    backgroundColor: 'green'
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
