/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  AppState
} from 'react-native';
import BackgroundTimer from 'react-native-background-timer';

import * as firebase from 'firebase';
// Initialize Firebase
var config = {
  apiKey: "AIzaSyDg9Qy5W1YzNK1mmleIvzMBTxtQIub3kR8",
  authDomain: "myreactnative.firebaseapp.com",
  databaseURL: "https://myreactnative.firebaseio.com",
  storageBucket: "myreactnative.appspot.com",
  messagingSenderId: "480732941628"
};
firebase.initializeApp(config);

export default class l12_firebase extends Component {
  constructor(props){
    super(props);
    this.database = firebase.database();
    this.state = {
      userOnline: 0
    }
    this.userOnlineRef = this.database.ref('userOnline');
    this.handleAppStateChange = this.handleAppStateChange.bind(this);
    AppState.addEventListener('change', this.handleAppStateChange);
  }

  handleAppStateChange(){
    console.log("AppState", AppState.currentState);
    if (AppState.currentState == 'active'){
      this.getNumberOfUserOnlineOnceAndIncreaseBy1();
    }else if(AppState.currentState == 'inactive'){
      BackgroundTimer.setTimeout(() => {
        this.decreaseNumberOfUserOnline()
      }, 0);
    }
  }

  getNumberOfUserOnlineOnceAndIncreaseBy1(){
    this.userOnlineRef.once('value', (snapshot) =>{
      this.userOnlineRef.set(snapshot.val()+1);
    });
  }

  decreaseNumberOfUserOnline(){
    this.userOnlineRef.once('value', (snapshot) =>{
      this.userOnlineRef.set(snapshot.val()-1);
    });
  }

  listeningForNumberOfUserOnline(){
    this.userOnlineRef.on('value', (snapshot) =>{
      console.log("UserOnline change", snapshot.val());
      this.setState({userOnline:snapshot.val()});
    });
  }

  componentDidMount(){
    this.listeningForNumberOfUserOnline();
    this.getNumberOfUserOnlineOnceAndIncreaseBy1();
  }

  sendChat(){

  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.labelText}>
            #User online: {this.state.userOnline}
          </Text>
        </View>
        <View style={styles.content}>
        </View>
        <View style={styles.footer}>
          <TextInput style={styles.textInput}>
          </TextInput>
          <TouchableOpacity style={styles.button}
            onPress={this.sendChat}>
            <Text style={styles.buttonText}>Send</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20
  },
  content:{
    padding: 10,
    flex:1,
  },
  labelText:{
    fontSize: 20
  },
  header:{
    justifyContent:'center',
    alignItems: 'center',
    height: 50,
    padding: 5,
    backgroundColor: '#dddddd'
  },
  footer:{
    height: 50,
    backgroundColor: 'yellow',
    flexDirection: 'row'
  },
  textInput:{
    flex:1,
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 5
  },
  button:{
    width: 100,
    backgroundColor: 'darkblue',
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText:{
    fontSize: 20,
    color: 'white'
  }

});

AppRegistry.registerComponent('l12_firebase', () => l12_firebase);
