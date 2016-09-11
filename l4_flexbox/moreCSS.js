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

  const boxStyle = {
    width: 200,
    height: 200,
    backgroundColor: 'rgb(74,124,226)',
    borderWidth: 10,
    borderBottomColor: 'blue',
    borderLeftColor: 'green',
    borderRightColor: 'red',
    borderTopColor: 'red',
    opacity: 0.5,
    borderRadius: 20,
    margin: 20,
    position: 'absolute'
  }

  const box2Style = {
    width: 200,
    height: 200,
    backgroundColor: '#faa',
    borderWidth: 10,
    borderColor: 'black',
    opacity: 0.5,
    borderRadius: 20,
    marginTop: 100,
    marginLeft: 40
  }

  return (
    <View style={{flex:1}}>
      <View style={boxStyle}>
      </View>
      <View style={box2Style}>
      </View>
    </View>
  )
}

// App registration and rendering
AppRegistry.registerComponent('flexbox', () => App)
