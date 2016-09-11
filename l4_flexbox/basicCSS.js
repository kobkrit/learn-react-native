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

const App = () => {

  const style = {
    width: 200,
    height: 200,
    backgroundColor: 'rgb(74,124,226)',
    borderWidth: 2,
    borderColor: 'blue',
    borderRadius: 20,
    padding: 40,
    margin: 80
  }

  const boxStyle = {
    flex: 1,
    backgroundColor: 'pink'
  }

  const textStyle = {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'red'
  }

  return (
    <View style={style}>
      <View style={boxStyle}>
        <Text style={textStyle}>
          Hello!
        </Text>
      </View>
    </View>
  )
}

// App registration and rendering
AppRegistry.registerComponent('flexbox', () => App)
