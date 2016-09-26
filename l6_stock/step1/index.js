import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

class l6_stock extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
        <Text style={styles.stockName}>
          SET
        </Text>
        <Text style={styles.stockIndex}>
          9,999.99
        </Text>
        <Text style={styles.stockChange}>
          +115.23 (0.56%)
        </Text>
        </View>
        <View style={styles.footer}>
          <TouchableOpacity style={styles.button}>
            <Text>SET</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text>S&P</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text>NASDAQ</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text>Dow Jones</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text>Shanghai</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text>Nikkei</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text>Hang Seng</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text>TSEC</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text>EURO</Text>
          </TouchableOpacity>

        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer:{
    flexDirection:'row',
    flexWrap: 'wrap',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  stockName:{
    fontSize:30
  },
  stockIndex:{
    fontSize: 80
  },
  stockChange:{
    fontSize: 40
  },
  button:{
    margin: 10,
    borderWidth: 1,
    width: 100,
    height: 50,
    borderRadius: 10,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'lightgray'
  }
});

AppRegistry.registerComponent('l6_stock', () => l6_stock);
