/**
 * 2.js
 * Whole State in AsyncStorage
 * @flow
 */

import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View, AsyncStorage, TextInput} from 'react-native';


export default class l11_storage extends Component {
  constructor(props) {
      super(props);
      this.state = {};
      AsyncStorage.getItem('state').then((myState) => {
        this.setState(JSON.parse(myState));
      });
  }

  saveState(){
    AsyncStorage.setItem('state', JSON.stringify(this.state));
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.instructions}>
          state = {JSON.stringify(this.state)}
        </Text>
        <TextInput style={styles.textInput}
          onChangeText={(text) => {
            this.setState({text: text});
            //To make sure that the setState is completed before the saveState
            setTimeout(() => this.saveState(),0);
          }}
          value={this.state.text}/>
          <TextInput style={styles.textInput}
            onChangeText={(text) => {
              this.setState({text2: text});
              //To make sure that the setState is completed before the saveState
              setTimeout(() => this.saveState(),0);
            }}
            value={this.state.text2}/>
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
