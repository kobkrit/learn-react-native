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
      <View>

        <View style={{height:20}}/>

        <Text>Hello World!</Text>

        <Image
          style={{height:100, width:100}}
          source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}
        />

        <Switch />

        <TextInput
          style={{height:40, borderColor: 'gray', borderWidth: 1}}
          value='Useless TextInput'
        />

        <TextInput
          multiline={true}
          numberOfLine={4}
          style={{height:100, borderColor: 'gray', borderWidth: 1}}
          value='Useless MultiLine TextInput'
        />

        <TouchableOpacity onPress={()=>{}} style={{borderColor:'#f00', backgroundColor:'#faa', borderWidth:1, padding:10}}>
          <Text>Touch me for Opacity!</Text>
        </TouchableOpacity>

        <TouchableHighlight onPress={()=>{}} underlayColor='#f00a'
          style={{borderColor:'#f00', backgroundColor:'#faa', borderWidth:1, padding:10}}>
          <Text>Touch me for Highlight!</Text>
        </TouchableHighlight>

      </View>
    );
 }
}
const styles = StyleSheet.create({
});

AppRegistry.registerComponent('flexbox', () => flexbox);
