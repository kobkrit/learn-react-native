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
        <View style={{height:20}}/>
        <View style={styles.row}>
          <Image
            style={{height:100, width:100}}
            source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}
          />
          <View style={[styles.container, {padding:10}]}>
            <Text style={styles.header}>
              React Course.
            </Text>
            <Text numberOfLines={3}>
              Course about how to write the React Web framework.
            </Text>
          </View>
        </View>
        <View style={styles.row}>
          <Image
            style={{height:100, width:100}}
            source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}
          />
          <View style={[styles.container, {padding:10}]}>
            <Text style={styles.header}>
              React Native Course.
            </Text>
            <Text numberOfLines={3}>
              Course about how to write the Mobile App in iOS and Android by using
              React-Native.
            </Text>
          </View>
        </View>
        <View style={styles.row}>
          <Image
            style={{height:100, width:100}}
            source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}
          />
          <View style={[styles.container, {padding:10}]}>
            <Text style={styles.header}>
              Redux Course.
            </Text>
            <Text numberOfLines={3}>
              Course about a predictable state container for JavaScript apps (aka Redux) which is help the application much more clearer
            </Text>
          </View>
        </View>
      </View>
    );
 }
}
const styles = StyleSheet.create({
  container:{
    flex:1
  },
  row:{
    justifyContent: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5
  },
  header:{
    fontSize:20,
    flexWrap: 'wrap'
  }
});

AppRegistry.registerComponent('flexbox', () => flexbox);
