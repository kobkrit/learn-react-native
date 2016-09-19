import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

class StockButton extends Component {
  render() {
    return (
      <TouchableOpacity style={styles.button} onPress={() => {this.props.onPress(this.props.code)}}>
        <Text>{this.props.name}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  buttonText:{
    fontSize: 20
  },
  button:{
    margin: 10,
    borderWidth: 1,
    width: 100,
    height: 50,
    borderRadius: 10,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'lightgray'
  }
});

export default StockButton;
