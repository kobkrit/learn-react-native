import React, {Component} from 'react';
import {TouchableHighlight, AppRegistry,
   StyleSheet, Text, View} from 'react-native';

class DetailScreen extends Component {
  render() {
    return (
      <View style={{padding: 20, paddingTop:100}}>
        <Text style={{fontSize:30}}>
          Detail Screen:
          {this.props.imdbID}
        </Text>
      </View>
    );
  }
}

export default DetailScreen;
