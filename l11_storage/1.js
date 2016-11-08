/**
 * 1.js
 * AsyncStorage
 * @flow
 */

import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View, AsyncStorage, TextInput} from 'react-native';


export default class l11_storage extends Component {
  constructor(props) {
      super(props);
      this.state = {'myKey':''};
      AsyncStorage.getItem('myKey').then((myValue) => {
        this.setState({'myKey':myValue});
      });
  }

  saveData(myValue){
    AsyncStorage.setItem('myKey', myValue);
    this.setState({'myKey': myValue});
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.instructions}>
          myValue = {this.state.myKey}
        </Text>
        <TextInput style={styles.textInput}
          onChangeText={(text) => this.saveData(text)}
          value={this.state.myKey}/>
        <Text style={styles.instructions}>
        Type something into the text box.  It will be saved to device storage.
        Next time you open the application, the saved data will still exist.
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    padding: 10
  },
  textInput: {
    height:50,
    fontSize: 20,
    borderWidth: 1,
    borderRadius: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }
});

AppRegistry.registerComponent('l11_storage', () => l11_storage);
