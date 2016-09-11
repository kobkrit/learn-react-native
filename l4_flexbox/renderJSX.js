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
    let number = 8;
    return (
      <View>
        <View style={{height:20}}></View>
        <Text>{number > 5?'Greater than 5':'Less than 5'}</Text>
      {[...Array(number)].map((x,i) =>
          <Text>{i+1}</Text>
        )}
      </View>
    );
 }
}



const styles = StyleSheet.create({
});

AppRegistry.registerComponent('flexbox', () => flexbox);
