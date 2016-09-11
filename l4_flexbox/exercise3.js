import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Switch,
  TextInput,
  TouchableOpacity,
  TouchableHighlight
} from 'react-native';

class flexbox extends Component {
  render() {
    return (
      <View style={styles.outer}>
        <View style={styles.inner}>
          <View style={[styles.box,{backgroundColor:'blue'}]}></View>
          <View style={[styles.box,{backgroundColor:'red'}]}></View>
        </View>
        <View style={[styles.inner, {alignItems:'flex-end'}]}>
          <View style={[styles.box,{backgroundColor:'pink'}]}></View>
          <View style={[styles.box,{backgroundColor:'orange'}]}></View>
        </View>
      </View>
    );
 }
}
const styles = StyleSheet.create({
  outer:{
    flex:1,
    flexDirection: 'row'
  },
  inner:{
    flex:1,
    justifyContent:'space-between'
  },
  box:{
    width: 50,
    height: 50
  }
});

AppRegistry.registerComponent('flexbox', () => flexbox);
