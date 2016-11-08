/**
 * realm1.js
 * Realm Database Example
* @flow
 */

import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  AsyncStorage,
  TextInput
} from 'react-native';
import Realm from 'realm';

export default class l11_storage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let realm = new Realm({
      schema: [
        {
          name: 'Dog',
          properties: {
            name: 'string'
          }
        }
      ],
      schemaVersion: 3
    });

    realm.write(() => {
      realm.create('Dog', {name: 'Rex'});
    });

    return (
      <View style={styles.container}>
        <Text style={styles.instructions}>
          {realm.objects('Dog').map((dog, i)=>(
            <Text style={styles.instructions}>
              Dog#{i}: {dog.name}{'\n'}
            </Text>
          ))}
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
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
    fontSize: 20
  }
});

AppRegistry.registerComponent('l11_storage', () => l11_storage);
