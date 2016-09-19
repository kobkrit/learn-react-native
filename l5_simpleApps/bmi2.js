import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from 'react-native';

class BMI extends Component {

  constructor(props){
    super(props);
    this.state = {weight: '0', height: '0', bmi: 0};
    this.compute = this.compute.bind(this);
  }

  render(){
    console.log(this.state);
    return (
     <View style={styles.container}>
      <View style={styles.group}>
        <Text style={styles.title}>Weight (KG)</Text>
        <TextInput style={styles.input}
           value={this.state.weight}
           onChangeText={(weight) => this.setState({weight})}
           keyboardType='numeric'/>
      </View>
      <View style={styles.group}>
        <Text style={styles.title}>Height (CM)</Text>
        <TextInput style={styles.input}
          value={this.state.height}
          onChangeText={(height) => this.setState({height})}
          keyboardType='numeric'/>
      </View>
      <View style={styles.center}>
        <View style={styles.group}>
          <Text style={styles.title}>BMI: {this.state.bmi.toFixed(2)}</Text>
        </View>
        <View style={styles.group}>
          <TouchableOpacity style={styles.button} onPress={this.compute}>
            <Text style={styles.title}>Compute</Text>
          </TouchableOpacity>
        </View>
      </View>
     </View>
   );
  }

  compute(){
    console.log("Compute method is run!");
    let weight = parseFloat(this.state.weight); //kg
    let height = parseFloat(this.state.height); //cm
    let bmi = weight / Math.pow(height/100, 2);
    this.setState(______________________);
  }
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    padding: 20,
    justifyContent: 'center'
  },
  button:{
    backgroundColor: 'lightblue',
    padding: 20,
    borderWidth: 1
  },
  center:{
    alignItems: 'center'
  },
  group:{
    marginTop:10
  },
  input:{
    height: 50,
    flex: 1,
    borderWidth: 1
  },
  title:{
    fontSize: 20
  }
});

AppRegistry.registerComponent('simpleApps', () => BMI);
