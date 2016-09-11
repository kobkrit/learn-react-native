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
        <View style={[styles.container, {alignItems:'flex-start'}]}>
          <View style={styles.item1}></View><View style={styles.item2}></View><View style={styles.item3}></View>
        </View>
        <View style={[styles.container, {alignItems:'center'}]}>
          <View style={styles.item1}></View><View style={styles.item2}></View><View style={styles.item3}></View>
        </View>
        <View style={[styles.container, {alignItems:'flex-end'}]}>
          <View style={styles.item1}></View><View style={styles.item2}></View><View style={styles.item3}></View>
        </View>
        <View style={[styles.container, {alignItems:'stretch'}]}>
          <View style={styles.item4}></View><View style={styles.item5}></View><View style={styles.item6}></View>
        </View>
        <View style={[styles.container, {alignItems:'flex-start'}]}>
          <View style={styles.item4}></View><View style={styles.item5}></View><View style={styles.item6}></View>
        </View>
      </View>
    );}}
const styles = StyleSheet.create({
  container: {
    marginBottom:5, height:100,
    flexDirection:'row',
    borderColor:'black', borderWidth:1
  },
  item1:{width:50, height:50, backgroundColor: 'red'},
  item2:{width:50, height:50, backgroundColor: 'blue'},
  item3:{width:50, height:50, backgroundColor: 'green'},
  item4:{width:50, backgroundColor: 'red'},
  item5:{width:50, backgroundColor: 'blue'},
  item6:{width:50, backgroundColor: 'green'}
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
