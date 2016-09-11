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
      <View style={styles.container}>
        <Text style={styles.headline}>Hello World!</Text>
      </View>
    );
 }
}
const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  headline:{
    fontSize:40
  }
});

AppRegistry.registerComponent('flexbox', () => flexbox);
