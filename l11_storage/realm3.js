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
  TouchableOpacity,
  Picker
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
      searchKey: '',
      sort: null,
      dogAge: '0',
      dogName: ''
    }
    this.clearDB = this.clearDB.bind(this);
    this.addDB = this.addDB.bind(this);
  }

  addDB(){
    realm.write(() => {
      realm.create('Dog', {name: this.state.dogName, age: parseInt(this.state.dogAge)});
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
    if (this.state.sort){
      dogs = dogs.sorted(this.state.sort);
    }
    return (
      <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={() => this.setState({sort:'name'})}>
        <Text style={styles.buttonText}>Sort By Name</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => this.setState({sort:'age'})}>
        <Text style={styles.buttonText}>Sort By Age</Text>
      </TouchableOpacity>
      <TextInput style={styles.textInput}
        onChangeText={(text) => this.setState({searchKey: text})}
        value={this.state.searchKey}/>
        {dogs.map((dog, i)=>(
          <Text key={i} style={styles.instructions}>
            Dog#{i}: {dog.name}({dog.age})
          </Text>
        ))}
        <TouchableOpacity style={styles.button} onPress={this.clearDB}>
          <Text style={styles.buttonText}>Clear!</Text>
        </TouchableOpacity>
        <TextInput style={styles.textInput}
          onChangeText={(text) => this.setState({dogName: text})}
          value={this.state.dogName}/>
          <TextInput style={styles.textInput}
            onChangeText={(text) => this.setState({dogAge: text})}
            value={this.state.dogAge}/>

        <TouchableOpacity style={styles.button} onPress={this.addDB}>
          <Text style={styles.buttonText}>Add Into Database</Text>
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
  pickerInput:{
    width:200,
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
