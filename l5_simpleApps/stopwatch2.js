import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight
} from 'react-native';

import formatTime from 'minutes-seconds-milliseconds';

class Stopwatch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timeElapsed: null, //Difference between the current time and the startTime
      running: false, //Does the clock is ticking?
      startTime: null, //Record the startTime, when user press start.
      laps: [], //Array from lap records
    };
    this.handleStartPress = this.handleStartPress.bind(this);
  }

  handleStartPress(){
    console.log("handleStartPressed");
    this.setState({startTime: new Date()});

    setInterval(()=>{
      this.setState({timeElapsed: new Date() - this.state.startTime})
    }, 30);
  }

  render(){
    return <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.textWrapper}>
          <Text style={styles.timer}>
            {formatTime(this.state.timeElapsed)}
          </Text>
        </View>
        <View style={styles.buttonWrapper}>
          <TouchableHighlight style={styles.button} underlayColor='gray'>
            <Text style={styles.buttonText}>Lap</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.button} underlayColor='gray' onPress={this.handleStartPress}>
            <Text style={styles.buttonText}>Start</Text>
          </TouchableHighlight>
        </View>
      </View>
      <View style={styles.footer}>
        <View style={styles.lap}>
          <Text style={styles.lapText}>
            Lap #1
          </Text>
          <Text style={styles.lapText}>
            00:00.00
          </Text>
        </View>
        <View style={styles.lap}>
          <Text style={styles.lapText}>
            Lap #2
          </Text>
          <Text style={styles.lapText}>
            00:00.00
          </Text>
        </View>

      </View>
    </View>
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    padding: 20
  },
  button:{
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 2,
    backgroundColor: 'lightgray',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText:{
    fontSize: 20
  },
  lap:{
    flexDirection: 'row',
    justifyContent:'space-around',
    backgroundColor: 'lightgray',
    padding: 10,
    marginBottom:10
  },
  lapText:{
    fontSize: 30
  },
  textWrapper:{
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonWrapper:{
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  timer:{
    fontSize: 60
  },
  header:{
    flex:1
  },
  footer:{
    flex:1
  }
});

AppRegistry.registerComponent('simpleApps', () => Stopwatch);
