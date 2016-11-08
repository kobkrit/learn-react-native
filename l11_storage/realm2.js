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
  TextInput,
  TouchableOpacity
} from 'react-native';
import Realm from 'realm';
var realm;
export default class l11_storage extends Component {
  constructor(props) {
    super(props);
    realm = new Realm({
      schema: [
        {
          name: 'Dog',
          properties: {
            name: 'string',
            age: 'int'
          }
        }
      ],
      schemaVersion: 5
    });
    this.state = {
      searchKey: ''
    }
    this.clearDB = this.clearDB.bind(this);
    this.addDB = this.addDB.bind(this);
    this.clearDB();
    this.addDB();
  }

  addDB(){
    realm.write(() => {
      realm.create('Dog', {name: 'T-Rex', age: 5});
      realm.create('Dog', {name: 'Baht', age: 4});
      realm.create('Dog', {name: 'Golden', age: 10});
      realm.create('Dog', {name: 'Daeng', age: 2});
      realm.create('Dog', {name: 'Dum', age: 1});
      realm.create('Dog', {name: 'Yao', age: 7});
      this.forceUpdate();
    });
  }

  clearDB(){
    realm.write(() => {
      realm.delete(realm.objects('Dog'));
      this.forceUpdate();
    });
  }

  render() {
    let dogs = realm.objects('Dog');
    console.log(this.state.searchKey);
    if (this.state.searchKey && this.state.searchKey.length>0){
      dogs = dogs.filtered(`name CONTAINS "${this.state.searchKey}"`);
    }
    return (
      <View style={styles.container}>
      <TextInput style={styles.textInput}
        onChangeText={(text) => this.setState({searchKey: text})}
        value={this.state.searchKey}/>
        {dogs.map((dog, i)=>(
          <Text style={styles.instructions}>
            Dog#{i}: {dog.name}({dog.age})
          </Text>
        ))}
        <TouchableOpacity style={styles.button} onPress={this.clearDB}>
          <Text style={styles.buttonText}>Clear!</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={this.addDB}>
          <Text style={styles.buttonText}>Add Database</Text>
        </TouchableOpacity>
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
    marginBottom: 5,
    fontSize: 20
  },
  button:{
    backgroundColor:'darkblue',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    height:40
  },
  buttonText:{
    color: 'white',
    fontSize: 20
  }
});

AppRegistry.registerComponent('l11_storage', () => l11_storage);
