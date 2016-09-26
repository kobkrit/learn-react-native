import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  TouchableOpacity
} from 'react-native';

class StockButton extends Component {
  render() {
    return(
      <TouchableOpacity style={styles.button}
        onPress={()=>{this.props.onPress(this.props.name, this.props.code)}}>
        <Text>{this.props.name}</Text>
      </TouchableOpacity>
    );
  }
}


const styles = StyleSheet.create({
  button:{
    margin: 10,
    height: 50,
    width: 100,
    borderWidth: 1,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'lightgray'
  }
});

export default StockButton;
