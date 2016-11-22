/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import moment from 'moment';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  AppState,
  Modal
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
  constructor(props) {
    super(props);
    this.database = firebase.database();
    this.state = {
      chat: '',
      chats: [],
      userOnline: 0,
      modalVisible: true,
      name: "Anonymous"
    }
    this.userOnlineRef = this.database.ref('userOnline');
    this.chatsRef = this.database.ref('chats');
    this.handleAppStateChange = this.handleAppStateChange.bind(this);
    this.sendChat = this.sendChat.bind(this);
    AppState.addEventListener('change', this.handleAppStateChange);
  }

  handleAppStateChange() {
    console.log("AppState", AppState.currentState);
    if (AppState.currentState == 'active') {
      this.getNumberOfUserOnlineOnceAndIncreaseBy1ByTransaction();
    } else if (AppState.currentState == 'inactive') {
      BackgroundTimer.setTimeout(() => this.decreaseNumberOfUserOnlineByTransaction(), 0);
    }
  }

  getNumberOfUserOnlineOnceAndIncreaseBy1ByTransaction() {
    this.userOnlineRef.transaction(function(currentUserOnline) {
      return currentUserOnline + 1;
    });
  }

  decreaseNumberOfUserOnlineByTransaction() {
    this.userOnlineRef.transaction(function(currentUserOnline) {
      return currentUserOnline > 0
        ? currentUserOnline - 1
        : 0;
    });
  }
  listeningForNumberOfUserOnline() {
    this.userOnlineRef.on('value', (snapshot) => {
      console.log("UserOnline change", snapshot.val());
      this.setState({userOnline: snapshot.val()});
    });
  }

  listeningForChatChange() {
    this.chatsRef.on('value', (snapshot) => {
      console.log("Chats change:", snapshot.val());
      this.setState({
        chats: snapshot.val() || []
      });
    })
  }

  componentDidMount() {
    this.listeningForNumberOfUserOnline();
    this.getNumberOfUserOnlineOnceAndIncreaseBy1ByTransaction();
    this.listeningForChatChange();
  }

  sendChat() {
    console.log(this.state.chat);
    this.chatsRef.transaction((chats) => {
      if (!chats) {
        chats = [];
      }
      chats.push({name: this.state.name, chat: this.state.chat, when: new Date().getTime()});
      this.setState({chat: ""});
      return chats;
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Modal animationType={"slide"} transparent={true} visible={this.state.modalVisible}>
          <View style={styles.modal}>
            <TouchableOpacity style={styles.closeButton} onPress={() => this.setState({modalVisible: false})}>
              <Text>X</Text>
            </TouchableOpacity>
            <Text>Please input your name.</Text>
            <TextInput style={styles.textInput} value={this.state.name} onChangeText={(t) => this.setState({name: t})}></TextInput>
            <TouchableOpacity style={styles.submitButton} onPress={() => {
              this.setState({modalVisible: false});
            }}>
              <Text style={styles.buttonText}>OK</Text>
            </TouchableOpacity>
          </View>
        </Modal>
        <View style={styles.header}>
          <Text style={styles.labelText}>
            Hello {this.state.name}! #User online: {this.state.userOnline}
          </Text>
        </View>
        <View style={styles.content}>
          {this.state.chats.map((obj, i) => <View key={i} style={styles.chatContainer}>
            <View style={styles.chatMeta}>
              <Text style={styles.bold}>{obj.name || "Anonymous"}</Text>
              <Text>
                ({moment(obj.when).fromNow()})</Text>
            </View>
            <View style={styles.chat}>
              <Text style={styles.chatText}>{obj.chat}</Text>
            </View>
          </View>)}
        </View>
        <View style={styles.footer}>
          <TextInput style={styles.textInput} value={this.state.chat} onChangeText={(t) => this.setState({chat: t})}></TextInput>
          <TouchableOpacity style={styles.button} onPress={this.sendChat}>
            <Text style={styles.buttonText}>Send</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  chatMeta: {
    flexDirection: 'row'
  },
  chat: {
    backgroundColor: 'grey',
    borderRadius: 10,
    padding: 5
  },
  chatText: {
    color: 'white'
  },
  container: {
    flex: 1,
    paddingTop: 20
  },
  content: {
    padding: 10,
    flex: 1
  },
  labelText: {
    fontSize: 20
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    padding: 5,
    backgroundColor: '#dddddd'
  },
  footer: {
    height: 50,
    backgroundColor: 'yellow',
    flexDirection: 'row'
  },
  textInput: {
    flex: 1,
    height: 50,
    width: 200,
    padding: 5,
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 5
  },
  button: {
    width: 100,
    backgroundColor: 'darkblue',
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    fontSize: 20,
    color: 'white'
  },
  modal: {
    height: 150,
    width: 300,
    marginTop: 200,
    padding: 10,
    alignSelf: 'center',
    backgroundColor: 'lightblue',
    margin: 10,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  closeButton: {
    alignSelf: 'flex-end'
  },
  submitButton: {
    alignSelf: 'center',
    backgroundColor: 'darkblue',
    width: 100,
    height: 44,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10
  },
  bold: {
    fontWeight: 'bold'
  }
});

AppRegistry.registerComponent('l12_firebase', () => l12_firebase);
