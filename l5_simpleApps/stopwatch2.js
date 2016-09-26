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
    this.startStopButton = this.startStopButton.bind(this);
    this.handleLapPress = this.handleLapPress.bind(this);
  }

  handleLapPress(){
    let laps = this.state.laps;
    this.setState({
      laps: [...laps, this.state.timeElapsed],
      timeElapsed: new Date()
    });
    console.log(this.state);
  }

  handleStartPress(){
    console.log("handleStartPressed");

    if (this.state.running){ //Going to stop case
      clearInterval(this.interval);
      this.setState({running: false});
      return;
    }

    //Going to start case
    this.setState({startTime: new Date(), running: true});

    this.interval = setInterval(()=>{
      this.setState({timeElapsed: new Date() - this.state.startTime})
    }, 30);
  }

  startStopButton(){
    let style = (this.state.running)? styles.stopButton : styles.startButton;
    return (
      <TouchableHighlight style={[styles.button, style]} underlayColor='gray' onPress={this.handleStartPress}>
        <Text style={styles.buttonText}>{this.state.running?'Stop':'Start'}</Text>
      </TouchableHighlight>
    );
  }

  lapButton(){
    return (
      <TouchableHighlight style={styles.button} onPress={this.handleLapPress} underlayColor='gray'>
        <Text style={styles.buttonText}>Lap</Text>
      </TouchableHighlight>
    );
  }

  laps(){
    return(
    <View>
        {this.state.laps.map((timeElapsed, i)=>{
          return (
          <View key={i} style={styles.lap}>
            <Text style={styles.lapText}>
              Lap {i+1}
            </Text>
            <Text style={styles.lapText}>
              {formatTime(timeElapsed)}
            </Text>
          </View>
          );
        })}
    </View>
    );
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
          {this.lapButton()}
          {this.startStopButton()}
        </View>
      </View>
      <View style={styles.footer}>
        {this.laps()}
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
  },
  startButton:{
    borderColor: 'green'
  },
  stopButton:{
    borderColor: 'red'
  }
});

AppRegistry.registerComponent('simpleApps', () => Stopwatch);
